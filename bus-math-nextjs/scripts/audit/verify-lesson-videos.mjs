import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import crypto from "node:crypto"
import { build } from "esbuild"
import { pathToFileURL } from "node:url"
import { readVideoPage, compareVideoPage } from "./lesson-video-content.mjs"

const root = process.cwd()
const audit = JSON.parse(fs.readFileSync(path.join(root, "docs/lesson-video-audit.json"), "utf8"))
const live = process.argv.includes("--live")
const destination = process.argv.find((argument) => argument.startsWith("--output="))?.slice(9)
const temp = live ? undefined : fs.mkdtempSync(path.join(os.tmpdir(), "lesson-video-"))
const results = []
try {
  let renderPages
  if (!live) {
    const imports = audit.rows.map((row, index) => `import P${index} from ${JSON.stringify(path.join(root, "src/app/student", row.key, "page.tsx"))};`).join("\n")
    const pages = audit.rows.map((row, index) => `{key:${JSON.stringify(row.key)},Page:P${index}}`).join(",")
    const contents = `import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';${imports}\nexport default function render(){return [${pages}].map(({key,Page})=>({key,html:renderToStaticMarkup(React.createElement(Page))}));}`
    await build({ stdin: { contents, resolveDir: root, loader: "tsx" }, bundle: true, platform: "node", format: "cjs", packages: "external", jsx: "automatic", outfile: path.join(temp, "pages.cjs"), alias: { "@": path.join(root, "src") }, loader: { ".css": "empty" } })
    // External packages resolve from this link. The generated bundle never enters .next.
    fs.symlinkSync(path.join(root, "node_modules"), path.join(temp, "node_modules"), "dir")
    renderPages = (await import(pathToFileURL(path.join(temp, "pages.cjs")).href)).default.default()
  }
  for (const row of audit.rows) {
    const source = fs.readFileSync(path.join(root, "src/app/student", row.key, "page.tsx"))
    const digest = crypto.createHash("sha256").update(source).digest("hex")
    const html = live ? await (async () => {
      const response = await fetch(`https://bodangren.github.io/Business-Operations/student/${row.key}/`)
      if (!response.ok) throw new Error(`${row.key}: HTTP ${response.status}`)
      return response.text()
    })() : renderPages.find((page) => page.key === row.key).html
    const actual = readVideoPage(html)
    const errors = compareVideoPage(actual, row)
    if (digest !== row.sourceSha256) errors.push(`${row.key}: lesson source changed after review; inspect and update the evidence explicitly`)
    results.push({ key: row.key, status: errors.length ? "FAIL" : "PASS", accounting: actual.accounting.map((video) => video.resourceId), excel: actual.excel.map((video) => video.resourceId), earlierReviews: actual.relatedLessons.map((lesson) => lesson.href), section: actual.section ?? null, errors })
  }
  const report = { checkedAt: new Date().toISOString(), mode: live ? "published HTML" : "all 80 source page components, React server render", expectationSha256: crypto.createHash("sha256").update(fs.readFileSync("docs/lesson-video-audit.json")).digest("hex"), pages: results.length, passed: results.filter((result) => result.status === "PASS").length, failed: results.filter((result) => result.status === "FAIL").length, results }
  if (destination) fs.writeFileSync(destination, JSON.stringify(report, null, 2) + "\n")
  console.log(JSON.stringify({ mode: report.mode, pages: report.pages, passed: report.passed, failed: report.failed, errors: results.flatMap((result) => result.errors) }, null, 2))
  if (report.failed) process.exitCode = 1
} finally {
  if (temp) fs.rmSync(temp, { recursive: true, force: true })
}
