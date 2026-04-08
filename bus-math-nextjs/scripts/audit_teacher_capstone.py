#!/usr/bin/env python3

import json
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from playwright.sync_api import Browser, BrowserContext, Page, sync_playwright


ROOT = Path(__file__).resolve().parents[2]
OUT_ROOT = ROOT / "bus-math-nextjs" / "out"
SCREENSHOT_ROOT = ROOT / "screenshots" / "teacher-capstone-ui-audit-2026-04-07"
BASE_URL = os.environ.get("AUDIT_BASE_URL", "http://127.0.0.1:8125/Business-Operations")


@dataclass(frozen=True)
class ViewportPreset:
    name: str
    width: int
    height: int
    is_mobile: bool = False
    device_scale_factor: float = 1


VIEWPORTS = (
    ViewportPreset(name="desktop", width=1440, height=1400),
    ViewportPreset(
        name="mobile",
        width=430,
        height=932,
        is_mobile=True,
        device_scale_factor=3,
    ),
)


def enumerate_routes() -> list[tuple[str, str]]:
    routes: list[tuple[str, str]] = []
    
    # Teacher routes
    teacher_out = OUT_ROOT / "teacher"
    for html_path in sorted(teacher_out.glob("**/index.html")):
        rel = html_path.relative_to(OUT_ROOT).as_posix()
        route = "/" + rel.removesuffix("index.html")
        routes.append(("teacher", route))
    
    # Capstone routes
    capstone_out = OUT_ROOT / "capstone"
    for html_path in sorted(capstone_out.glob("**/index.html")):
        rel = html_path.relative_to(OUT_ROOT).as_posix()
        route = "/" + rel.removesuffix("index.html")
        routes.append(("capstone", route))
    
    return routes


def slug_for_route(route: str) -> str:
    parts = [part for part in route.strip("/").split("/") if part]
    return "-".join(parts)


def ensure_dirs() -> None:
    for viewport in VIEWPORTS:
        for section in ("teacher", "capstone"):
            (SCREENSHOT_ROOT / viewport.name / section).mkdir(parents=True, exist_ok=True)


def build_context(browser: Browser, viewport: ViewportPreset) -> BrowserContext:
    return browser.new_context(
        viewport={"width": viewport.width, "height": viewport.height},
        screen={"width": viewport.width, "height": viewport.height},
        is_mobile=viewport.is_mobile,
        has_touch=viewport.is_mobile,
        device_scale_factor=viewport.device_scale_factor,
    )


def collect_messages(page: Page, kind: str) -> list[str]:
    messages: list[str] = []

    def handler(message) -> None:
        text = getattr(message, "text", None)
        if callable(text):
            text = text()
        if text:
            messages.append(f"[{kind}] {text}")

    if kind == "console":
        page.on("console", handler)
    elif kind == "pageerror":
        page.on("pageerror", handler)
    return messages


def collect_failed_requests(page: Page) -> list[str]:
    failures: list[str] = []

    def on_failed(request) -> None:
        failure = request.failure
        if failure:
            reason = failure
            if isinstance(failure, dict):
                reason = failure.get("errorText", failure)
            failures.append(f"{request.method} {request.url} :: {reason}")

    page.on("requestfailed", on_failed)
    return failures


def audit_page(page: Page, url: str, screenshot_path: Path) -> dict:
    console_messages = collect_messages(page, "console")
    page_errors = collect_messages(page, "pageerror")
    failed_requests = collect_failed_requests(page)

    response = page.goto(url, wait_until="networkidle", timeout=30000)
    if not response or not response.ok:
        status = response.status if response else "no-response"
        raise RuntimeError(f"Capture failed for {url}: HTTP {status}")
    page.screenshot(path=str(screenshot_path), full_page=True)

    metrics = page.evaluate(
        """
        () => {
          const doc = document.documentElement;
          const body = document.body;
          const bodyWidth = body ? body.scrollWidth : 0;
          const bodyHeight = body ? body.scrollHeight : 0;
          return {
            title: document.title,
            bodyTextSample: (body?.innerText || "").trim().slice(0, 400),
            clientWidth: doc.clientWidth,
            scrollWidth: Math.max(doc.scrollWidth, bodyWidth),
            clientHeight: doc.clientHeight,
            scrollHeight: Math.max(doc.scrollHeight, bodyHeight),
            horizontalOverflow: Math.max(doc.scrollWidth, bodyWidth) > doc.clientWidth + 1,
            verticalOverflow: Math.max(doc.scrollHeight, bodyHeight) > doc.clientHeight + 1,
            missingImages: Array.from(document.images)
              .filter((img) => !img.complete || img.naturalWidth === 0)
              .map((img) => img.currentSrc || img.src || img.alt || "unknown-image")
          };
        }
        """
    )

    return {
        "url": url,
        "status": response.status if response else None,
        "ok": response.ok if response else False,
        "title": metrics["title"],
        "horizontalOverflow": metrics["horizontalOverflow"],
        "verticalOverflow": metrics["verticalOverflow"],
        "clientWidth": metrics["clientWidth"],
        "scrollWidth": metrics["scrollWidth"],
        "clientHeight": metrics["clientHeight"],
        "scrollHeight": metrics["scrollHeight"],
        "missingImages": metrics["missingImages"],
        "consoleMessages": console_messages,
        "pageErrors": page_errors,
        "failedRequests": failed_requests,
        "bodyTextSample": metrics["bodyTextSample"],
        "screenshot": str(screenshot_path.relative_to(ROOT)),
    }


def summarize(results: Iterable[dict]) -> dict:
    results = list(results)
    return {
        "totalRoutes": len(results),
        "non200": sum(1 for item in results if item["status"] != 200),
        "horizontalOverflowRoutes": sum(1 for item in results if item["horizontalOverflow"]),
        "routesWithMissingImages": sum(1 for item in results if item["missingImages"]),
        "routesWithConsoleMessages": sum(1 for item in results if item["consoleMessages"]),
        "routesWithPageErrors": sum(1 for item in results if item["pageErrors"]),
        "routesWithFailedRequests": sum(1 for item in results if item["failedRequests"]),
    }


def main() -> None:
    ensure_dirs()
    routes = enumerate_routes()
    report: dict[str, object] = {
        "baseUrl": BASE_URL,
        "routes": [route for _, route in routes],
        "views": {},
    }

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(channel="chrome", headless=True)
        for viewport in VIEWPORTS:
            context = build_context(browser, viewport)
            results: list[dict] = []
            try:
                for section, route in routes:
                    page = context.new_page()
                    try:
                        screenshot_path = SCREENSHOT_ROOT / viewport.name / section / f"{slug_for_route(route)}.png"
                        result = audit_page(page, BASE_URL + route, screenshot_path)
                        result["route"] = route
                        result["section"] = section
                        result["view"] = viewport.name
                        results.append(result)
                        print(
                            f"[{viewport.name}] {route} -> {screenshot_path.relative_to(ROOT)}",
                            flush=True,
                        )
                    finally:
                        page.close()
            finally:
                context.close()
            report["views"][viewport.name] = {
                "summary": summarize(results),
                "results": results,
            }
        browser.close()

    report_path = SCREENSHOT_ROOT / "audit-report.json"
    report_path.write_text(json.dumps(report, indent=2))
    print(f"Wrote {report_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
