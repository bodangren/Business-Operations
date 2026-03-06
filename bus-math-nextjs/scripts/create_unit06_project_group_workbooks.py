from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
import math
from pathlib import Path
from typing import List, Optional
from zipfile import ZipFile, ZIP_DEFLATED


ROOT_DIR = Path(__file__).resolve().parents[2]


RESOURCES_DIR = ROOT_DIR / "bus-math-nextjs" / "public" / "resources"
RESOURCES_DIR.mkdir(parents=True, exist_ok=True)

DATE_STAMP = datetime(2026, 3, 6, 12, 0, 0)

BOLD_STYLES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="2">
    <font>
      <sz val="11"/>
      <color theme="1"/>
      <name val="Calibri"/>
      <family val="2"/>
    </font>
    <font>
      <b/>
      <sz val="11"/>
      <color theme="1"/>
      <name val="Calibri"/>
      <family val="2"/>
    </font>
  </fonts>
  <fills count="2">
    <fill>
      <patternFill patternType="none"/>
    </fill>
    <fill>
      <patternFill patternType="gray125"/>
    </fill>
  </fills>
  <borders count="1">
    <border>
      <left/>
      <right/>
      <top/>
      <bottom/>
      <diagonal/>
    </border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="2">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
"""


def esc(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&apos;")
    )


def col_letter(index: int) -> str:
    result = ""
    while index > 0:
        index, rem = divmod(index - 1, 26)
        result = chr(65 + rem) + result
    return result


def core_props() -> str:
    iso = DATE_STAMP.strftime("%Y-%m-%dT%H:%M:%SZ")
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>Math for Business Operations</dc:creator>
  <cp:lastModifiedBy>Math for Business Operations</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">{iso}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">{iso}</dcterms:modified>
</cp:coreProperties>
"""


def app_props(sheet_titles: List[str]) -> str:
    heading_pairs = f"""    <vt:vector size="2" baseType="variant">
      <vt:variant>
        <vt:lpstr>Worksheets</vt:lpstr>
      </vt:variant>
      <vt:variant>
        <vt:i4>{len(sheet_titles)}</vt:i4>
      </vt:variant>
    </vt:vector>"""
    titles = "\n".join(f"      <vt:lpstr>{esc(title)}</vt:lpstr>" for title in sheet_titles)
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Excel</Application>
  <DocSecurity>0</DocSecurity>
  <ScaleCrop>false</ScaleCrop>
  <HeadingPairs>
{heading_pairs}
  </HeadingPairs>
  <TitlesOfParts>
    <vt:vector size="{len(sheet_titles)}" baseType="lpstr">
{titles}
    </vt:vector>
  </TitlesOfParts>
  <Company>Math for Business Operations</Company>
  <LinksUpToDate>false</LinksUpToDate>
  <SharedDoc>false</SharedDoc>
  <HyperlinksChanged>false</HyperlinksChanged>
  <AppVersion>16.0300</AppVersion>
</Properties>
"""


def rels_root() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"""


def workbook_xml(sheet_titles: List[str], defined_names: Optional[List[str]] = None) -> str:
    sheets_xml = "\n".join(
        f'    <sheet name="{esc(name)}" sheetId="{idx}" r:id="rId{idx}"/>'
        for idx, name in enumerate(sheet_titles, start=1)
    )
    if defined_names:
        dn = "\n".join(defined_names)
        defined = f"  <definedNames>\n{dn}\n  </definedNames>\n"
    else:
        defined = ""
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="22228"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="22755" windowHeight="14535"/>
  </bookViews>
  <sheets>
{sheets_xml}
  </sheets>
{defined}  <calcPr calcId="191029"/>
</workbook>
"""


def workbook_rels(sheet_count: int) -> str:
    lines = "\n".join(
        f'  <Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    lines += f'\n  <Relationship Id="rId{sheet_count + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{lines}
</Relationships>
"""


def content_types(sheet_count: int) -> str:
    sheet_entries = "\n".join(
        f'  <Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
{sheet_entries}
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
"""


def build_sheet(grid: List[List[Optional[dict]]], extra: str = "") -> str:
    row_xml: List[str] = []
    max_cols = max((len(row) for row in grid), default=0)
    last_col = col_letter(max_cols) if max_cols else "A"
    dimension = f"A1:{last_col}{len(grid)}" if grid else "A1:A1"

    for r_idx, row in enumerate(grid, start=1):
        cells: List[str] = []
        for c_idx, cell in enumerate(row, start=1):
            address = f"{col_letter(c_idx)}{r_idx}"
            if cell is None:
                cells.append(f'<c r="{address}"/>')
                continue

            value = cell.get("value")
            formula = cell.get("formula")
            style = cell.get("style")
            data_type = cell.get("type", "number")
            result = cell.get("result")

            attrs = [f'r="{address}"']
            if style is not None:
                attrs.append(f's="{style}"')
            attrs_str = " ".join(attrs)

            if formula is not None:
                if data_type == "str":
                    attrs_str = f'{attrs_str} t="str"'
                cell_xml = f"<c {attrs_str}><f>{esc(formula)}</f>"
                if result is not None:
                    cell_xml += f"<v>{esc(str(result))}</v>"
                cell_xml += "</c>"
            elif data_type == "str":
                inline_value = esc(str(value) if value is not None else "")
                cell_xml = f'<c {attrs_str} t="inlineStr"><is><t>{inline_value}</t></is></c>'
            elif value is None:
                cell_xml = f"<c {attrs_str}/>"
            else:
                cell_xml = f"<c {attrs_str}><v>{value}</v></c>"

            cells.append(cell_xml)

        row_xml.append(f'<row r="{r_idx}" spans="1:{max_cols}">{"".join(cells)}</row>')

    rows_markup = "\n    ".join(row_xml)
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="{dimension}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <selection activeCell="A1" sqref="A1"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>
    {rows_markup}
  </sheetData>
{extra}</worksheet>
"""


def write_workbook_file(
    base: Path,
    filename: str,
    sheets: List[tuple[str, str]],
    defined_names: Optional[List[str]] = None,
    styles: str = BOLD_STYLES,
) -> None:
    sheet_titles = [name for name, _ in sheets]
    mapping = {
        "[Content_Types].xml": content_types(len(sheets)),
        "_rels/.rels": rels_root(),
        "docProps/core.xml": core_props(),
        "docProps/app.xml": app_props(sheet_titles),
        "xl/workbook.xml": workbook_xml(sheet_titles, defined_names),
        "xl/_rels/workbook.xml.rels": workbook_rels(len(sheets)),
        "xl/styles.xml": styles,
    }
    for idx, (_, xml) in enumerate(sheets, start=1):
        mapping[f"xl/worksheets/sheet{idx}.xml"] = xml

    with ZipFile(base / filename, "w", ZIP_DEFLATED) as workbook:
        for path, data in mapping.items():
            workbook.writestr(path, data)


@dataclass(frozen=True)
class CostItem:
    name: str
    amount: float
    category: str
    note: str


@dataclass(frozen=True)
class PriceOption:
    label: str
    price: float
    forecast_units: int


@dataclass(frozen=True)
class Scenario:
    group_id: str
    workbook_label: str
    business_name: str
    business_type: str
    capacity: int
    target_profit: float
    base_option_index: int
    recommended_option_index: int
    price_band_text: str
    recommendation_text: str
    risk_text: str
    costs: tuple[CostItem, ...]
    options: tuple[PriceOption, ...]
    sensitivity_prices: tuple[int, ...]
    matrix_prices: tuple[int, ...]
    matrix_volumes: tuple[int, ...]

    @property
    def fixed_cost(self) -> float:
        return round(sum(item.amount for item in self.costs if item.category == "Fixed"), 2)

    @property
    def variable_cost(self) -> float:
        return round(sum(item.amount for item in self.costs if item.category == "Variable"), 2)

    @property
    def base_option(self) -> PriceOption:
        return self.options[self.base_option_index]

    @property
    def recommended_option(self) -> PriceOption:
        return self.options[self.recommended_option_index]


def s(value: str, style: int | None = None) -> dict:
    cell = {"value": value, "type": "str"}
    if style is not None:
        cell["style"] = style
    return cell


def n(value: float | int, style: int | None = None) -> dict:
    cell = {"value": value}
    if style is not None:
        cell["style"] = style
    return cell


def f(formula: str, result=None, *, text: bool = False, style: int | None = None) -> dict:
    cell = {"formula": formula}
    if result is not None:
        cell["result"] = result
    if text:
        cell["type"] = "str"
    if style is not None:
        cell["style"] = style
    return cell


def projected_profit(scenario: Scenario, option: PriceOption) -> float:
    return round((option.price - scenario.variable_cost) * option.forecast_units - scenario.fixed_cost, 2)


def break_even_units(scenario: Scenario, option: PriceOption) -> int:
    cm = option.price - scenario.variable_cost
    if cm <= 0:
        return 0
    return math.ceil(scenario.fixed_cost / cm)


SCENARIOS: tuple[Scenario, ...] = (
    Scenario(
        group_id="g1",
        workbook_label="Group 1",
        business_name="Neighborhood Shine",
        business_type="Mobile Car Detailing",
        capacity=45,
        target_profit=400,
        base_option_index=1,
        recommended_option_index=1,
        price_band_text="$95-$125 per detail",
        recommendation_text="Recommend Premium Detail at $110. It produces the highest projected monthly profit while keeping a solid cushion above break-even.",
        risk_text="If demand slips below 35 jobs, profit falls quickly. Watch repeat-booking rates before pushing to the $125 package.",
        costs=(
            CostItem("Van lease", 850, "Fixed", "Same monthly cost"),
            CostItem("Business insurance", 220, "Fixed", "Monthly policy cost"),
            CostItem("Booking software", 90, "Fixed", "Scheduling platform"),
            CostItem("Equipment depreciation", 180, "Fixed", "Buffers, vacuum, extractor"),
            CostItem("Storage locker", 160, "Fixed", "Supplies storage"),
            CostItem("Phone + internet", 100, "Fixed", "Business line"),
            CostItem("Soap and wax", 12, "Variable", "Per job supplies"),
            CostItem("Laundry and towel replacement", 8, "Variable", "Per job usage"),
            CostItem("Water and power usage", 6, "Variable", "Per job estimate"),
            CostItem("Travel fuel", 14, "Variable", "Per job travel"),
            CostItem("Payment processing", 10, "Variable", "Card fees per sale"),
            CostItem("Disposable supplies", 2, "Variable", "Gloves and liners"),
        ),
        options=(
            PriceOption("Economy Wash", 95, 42),
            PriceOption("Premium Detail", 110, 35),
            PriceOption("Ceramic Finish", 125, 27),
        ),
        sensitivity_prices=(95, 100, 105, 110, 115, 120, 125),
        matrix_prices=(95, 105, 115, 125, 135),
        matrix_volumes=(25, 30, 35, 40, 45),
    ),
    Scenario(
        group_id="g2",
        workbook_label="Group 2",
        business_name="Northside Print Lab",
        business_type="Custom Hoodie Print Shop",
        capacity=220,
        target_profit=500,
        base_option_index=1,
        recommended_option_index=2,
        price_band_text="$24-$32 per hoodie",
        recommendation_text="Recommend Premium Drop at $32. It is the only listed package that clears the target profit while staying within the 220-hoodie monthly capacity.",
        risk_text="The premium option depends on at least 160 orders. If school demand weakens, the middle tier becomes the safer fallback.",
        costs=(
            CostItem("Shop rent", 900, "Fixed", "Monthly storefront rent"),
            CostItem("Utilities base charge", 180, "Fixed", "Base utilities"),
            CostItem("Website storefront", 70, "Fixed", "Online ordering"),
            CostItem("Equipment lease", 450, "Fixed", "Press and cutter"),
            CostItem("Insurance", 140, "Fixed", "General coverage"),
            CostItem("Marketing retainer", 220, "Fixed", "Monthly ads"),
            CostItem("Admin stipend", 340, "Fixed", "Part-time admin"),
            CostItem("Blank hoodie", 8.0, "Variable", "Per unit material"),
            CostItem("Ink", 1.75, "Variable", "Per unit ink"),
            CostItem("Packaging", 0.75, "Variable", "Per unit bag"),
            CostItem("Card fees", 0.90, "Variable", "Per unit processing"),
            CostItem("Print labor", 2.60, "Variable", "Per unit labor"),
        ),
        options=(
            PriceOption("Bulk Spirit", 24, 220),
            PriceOption("Signature Hoodie", 28, 190),
            PriceOption("Premium Drop", 32, 160),
        ),
        sensitivity_prices=(24, 26, 28, 30, 32, 34),
        matrix_prices=(24, 26, 28, 30, 32),
        matrix_volumes=(140, 160, 180, 200, 220),
    ),
    Scenario(
        group_id="g3",
        workbook_label="Group 3",
        business_name="Fresh Fork Weekly",
        business_type="Meal Prep Delivery",
        capacity=420,
        target_profit=900,
        base_option_index=1,
        recommended_option_index=1,
        price_band_text="$18-$22 per meal kit",
        recommendation_text="Recommend Balanced Plan at $20. It delivers the highest projected profit and still leaves room below the 420-kit capacity ceiling.",
        risk_text="Ingredient inflation is the main threat. A $1 increase in variable cost would cut profit sharply across every volume level.",
        costs=(
            CostItem("Kitchen rental", 1150, "Fixed", "Shared kitchen lease"),
            CostItem("Permits and licenses", 150, "Fixed", "Monthly set-aside"),
            CostItem("Fridge lease", 180, "Fixed", "Cold storage"),
            CostItem("Ordering software", 85, "Fixed", "Subscription"),
            CostItem("Insurance", 160, "Fixed", "Business policy"),
            CostItem("Manager stipend", 500, "Fixed", "Operations lead"),
            CostItem("Phone + internet", 60, "Fixed", "Admin line"),
            CostItem("Equipment cleaning contract", 315, "Fixed", "Sanitation service"),
            CostItem("Ingredients", 5.40, "Variable", "Per kit food cost"),
            CostItem("Container", 0.80, "Variable", "Per kit packaging"),
            CostItem("Label", 0.20, "Variable", "Per kit label"),
            CostItem("Payment fees", 0.40, "Variable", "Per kit processing"),
            CostItem("Delivery fuel", 1.00, "Variable", "Per kit route cost"),
            CostItem("Prep labor", 0.80, "Variable", "Per kit assembly"),
            CostItem("Kitchen consumables", 0.40, "Variable", "Per kit gloves, foil, cleaner"),
        ),
        options=(
            PriceOption("Family Saver", 18, 380),
            PriceOption("Balanced Plan", 20, 320),
            PriceOption("Protein Pro", 22, 260),
        ),
        sensitivity_prices=(18, 19, 20, 21, 22, 23),
        matrix_prices=(18, 19, 20, 21, 22),
        matrix_volumes=(260, 300, 340, 380, 420),
    ),
    Scenario(
        group_id="g4",
        workbook_label="Group 4",
        business_name="CitySpark Studio",
        business_type="Social Media Content Studio",
        capacity=30,
        target_profit=800,
        base_option_index=1,
        recommended_option_index=0,
        price_band_text="$320-$420 per content package",
        recommendation_text="Recommend Starter Content at $320. Higher prices add margin, but the expected drop in clients hurts profit more than the price increase helps.",
        risk_text="This recommendation depends on maintaining 28 monthly packages. If workload drops, the studio may need to shift to the $360 tier or cut fixed costs.",
        costs=(
            CostItem("Studio rent", 1100, "Fixed", "Monthly creative studio"),
            CostItem("Editor salary", 1800, "Fixed", "Core staff editor"),
            CostItem("Software subscriptions", 420, "Fixed", "Adobe, scheduling, analytics"),
            CostItem("Internet + phones", 130, "Fixed", "Connectivity"),
            CostItem("Insurance", 190, "Fixed", "Liability coverage"),
            CostItem("Equipment lease", 360, "Fixed", "Cameras and lighting"),
            CostItem("Admin retainer", 200, "Fixed", "Client support"),
            CostItem("Freelance photographer", 70, "Variable", "Per package"),
            CostItem("Ad preview spend", 18, "Variable", "Per package testing"),
            CostItem("Stock assets", 12, "Variable", "Per package assets"),
            CostItem("Revisions labor", 25, "Variable", "Per package edits"),
            CostItem("Payment processing", 5, "Variable", "Per package fee"),
            CostItem("Travel", 10, "Variable", "Per package travel"),
        ),
        options=(
            PriceOption("Starter Content", 320, 28),
            PriceOption("Growth Content", 360, 22),
            PriceOption("Authority Content", 420, 16),
        ),
        sensitivity_prices=(300, 320, 340, 360, 380, 400, 420),
        matrix_prices=(300, 320, 340, 360, 380),
        matrix_volumes=(16, 20, 24, 28, 30),
    ),
)


def build_cost_setup_sheet(scenario: Scenario, include_key: bool) -> str:
    rows = [
        [s(f"{scenario.workbook_label} - {scenario.business_name} Pricing Project", style=1), None, None, None, None, None, None, None],
        [s(scenario.business_type), None, None, None, None, None, None, None],
        [s("Classify each cost as Fixed or Variable in column C. The totals in column G feed every other sheet."), None, None, None, None, None, None, None],
        [None, None, None, None, None, None, None, None],
        [s("Item", style=1), s("Amount", style=1), s("Category", style=1), s("Notes", style=1), None, s("Project Assumptions", style=1), s("Value", style=1), None],
    ]

    for item in scenario.costs:
        category_cell = s(item.category) if include_key else s("")
        rows.append([s(item.name), n(item.amount), category_cell, s(item.note), None, None, None, None])

    item_start = 6
    item_end = 5 + len(scenario.costs)
    fixed_formula = f'SUMIF($C${item_start}:$C${item_end},"Fixed",$B${item_start}:$B${item_end})'
    variable_formula = f'SUMIF($C${item_start}:$C${item_end},"Variable",$B${item_start}:$B${item_end})'

    while len(rows) < 16:
        rows.append([None, None, None, None, None, None, None, None])

    base_option = scenario.base_option
    rows[5][5] = s("Fixed Costs Total")
    rows[5][6] = f(fixed_formula, scenario.fixed_cost if include_key else None)
    rows[6][5] = s("Variable Cost per Unit")
    rows[6][6] = f(variable_formula, scenario.variable_cost if include_key else None)
    rows[7][5] = s("Monthly Capacity")
    rows[7][6] = n(scenario.capacity)
    rows[8][5] = s("Target Monthly Profit")
    rows[8][6] = n(scenario.target_profit)
    rows[9][5] = s("Base Price")
    rows[9][6] = n(base_option.price)
    rows[10][5] = s("Forecast Units @ Base Price")
    rows[10][6] = n(base_option.forecast_units)
    rows[11][5] = s("Suggested Price Band")
    rows[11][6] = s(scenario.price_band_text)
    rows[13][5] = s("Option", style=1)
    rows[13][6] = s("Price", style=1)
    rows[13][7] = s("Forecast Units", style=1)

    for idx, option in enumerate(scenario.options, start=14):
        rows[idx][5] = s(option.label)
        rows[idx][6] = n(option.price)
        rows[idx][7] = n(option.forecast_units)

    return build_sheet(rows)


def build_price_options_sheet(scenario: Scenario, include_results: bool) -> str:
    rows = [
        [s("PriceOptions - Compare candidate prices", style=1), None, None, None, None, None, None],
        [s("Each option uses the same fixed and variable cost structure from CostSetup, but a different expected monthly demand."), None, None, None, None, None, None],
        [s("Fixed Costs"), f("CostSetup!$G$6", scenario.fixed_cost if include_results else None), s("Capacity"), f("CostSetup!$G$8", scenario.capacity if include_results else None), None, None, None],
        [s("Variable Cost per Unit"), f("CostSetup!$G$7", scenario.variable_cost if include_results else None), None, None, None, None, None],
        [None, None, None, None, None, None, None],
        [s("Option", style=1), s("Price", style=1), s("Forecast Units", style=1), s("Variable Cost", style=1), s("CM ($)", style=1), s("CM Ratio", style=1), s("Projected Profit", style=1)],
    ]

    for idx, option in enumerate(scenario.options, start=7):
        profit = projected_profit(scenario, option)
        cm = option.price - scenario.variable_cost
        cm_ratio = round(cm / option.price, 4)
        rows.append([
            s(option.label),
            n(option.price),
            n(option.forecast_units),
            f("CostSetup!$G$7", scenario.variable_cost if include_results else None),
            f(f"B{idx}-D{idx}", cm if include_results else None),
            f(f"E{idx}/B{idx}", cm_ratio if include_results else None),
            f(f"(B{idx}-D{idx})*C{idx}-$B$3", profit if include_results else None),
        ])

    return build_sheet(rows)


def build_feasibility_sheet(scenario: Scenario, include_results: bool) -> str:
    rows = [
        [s("Feasibility - Break-even and capacity check", style=1), None, None, None, None, None, None],
        [s("This sheet asks two questions: Does each option beat break-even, and does forecast demand stay inside monthly capacity?"), None, None, None, None, None, None],
        [s("Fixed Costs"), f("CostSetup!$G$6", scenario.fixed_cost if include_results else None), s("Capacity"), f("CostSetup!$G$8", scenario.capacity if include_results else None), None, None, None],
        [None, None, None, None, None, None, None],
        [s("Option", style=1), s("Forecast Units", style=1), s("Break-Even Units", style=1), s("Above Break-Even?", style=1), s("Capacity OK?", style=1), s("Forecast Cushion", style=1), s("Projected Profit", style=1)],
    ]

    for offset, option in enumerate(scenario.options):
        be = break_even_units(scenario, option)
        above = "Yes" if option.forecast_units >= be else "No"
        capacity_ok = "Yes" if option.forecast_units <= scenario.capacity else "No"
        cushion = option.forecast_units - be
        profit = projected_profit(scenario, option)
        option_row = 6 + offset
        price_row = 7 + offset
        rows.append([
            s(option.label),
            f(f"PriceOptions!C{price_row}", option.forecast_units if include_results else None),
            f(f'ROUNDUP($B$3/(PriceOptions!E{price_row}),0)', be if include_results else None),
            f(f'IF(B{option_row}>=C{option_row},"Yes","No")', above if include_results else None, text=True),
            f(f'IF(B{option_row}<=$D$3,"Yes","No")', capacity_ok if include_results else None, text=True),
            f(f"B{option_row}-C{option_row}", cushion if include_results else None),
            f(f"PriceOptions!G{price_row}", profit if include_results else None),
        ])

    return build_sheet(rows)


def build_target_profit_sheet(scenario: Scenario, include_results: bool) -> str:
    base = scenario.base_option
    base_cm = base.price - scenario.variable_cost
    required_units = math.ceil((scenario.fixed_cost + scenario.target_profit) / base_cm)
    feasible = "Yes" if required_units <= scenario.capacity else "No"
    required_price = round(scenario.variable_cost + ((scenario.fixed_cost + scenario.target_profit) / base.forecast_units), 2)
    price_change = round(required_price - base.price, 2)

    rows = [
        [s("TargetProfit - Reverse solve from the target", style=1), None, None],
        [s("Use the base price and base forecast from CostSetup to see what must change to hit the monthly target."), None, None],
        [s("Fixed Costs"), f("CostSetup!$G$6", scenario.fixed_cost if include_results else None), None],
        [s("Variable Cost per Unit"), f("CostSetup!$G$7", scenario.variable_cost if include_results else None), None],
        [s("Target Monthly Profit"), f("CostSetup!$G$9", scenario.target_profit if include_results else None), None],
        [s("Base Price"), f("CostSetup!$G$10", base.price if include_results else None), None],
        [s("Base Forecast Units"), f("CostSetup!$G$11", base.forecast_units if include_results else None), None],
        [s("Capacity"), f("CostSetup!$G$8", scenario.capacity if include_results else None), None],
        [s("Contribution Margin @ Base Price"), f("B6-B4", base_cm if include_results else None), None],
        [None, None, None],
        [s("Required Units at Base Price"), f("ROUNDUP((B3+B5)/B9,0)", required_units if include_results else None), s("Compare this to capacity")],
        [s("Feasible at Capacity?"), f('IF(B11<=B8,"Yes","No")', feasible if include_results else None, text=True), None],
        [None, None, None],
        [s("Required Price at Base Forecast"), f("B4+((B3+B5)/B7)", required_price if include_results else None), s("Hold forecast units constant")],
        [s("Price Change Needed"), f("B14-B6", price_change if include_results else None), None],
    ]
    return build_sheet(rows)


def build_price_sensitivity_sheet(scenario: Scenario, include_results: bool) -> str:
    base_units = scenario.base_option.forecast_units
    rows = [
        [s("PriceSensitivity - One-variable price scan", style=1), None],
        [s("Assumption: forecast volume stays at the base plan while price changes."), None],
        [s("Fixed Costs"), f("CostSetup!$G$6", scenario.fixed_cost if include_results else None)],
        [s("Variable Cost per Unit"), f("CostSetup!$G$7", scenario.variable_cost if include_results else None)],
        [s("Assumed Units"), f("CostSetup!$G$11", base_units if include_results else None)],
        [None, None],
        [s("Price", style=1), s("Projected Profit", style=1)],
    ]
    for price in scenario.sensitivity_prices:
        profit = round((price - scenario.variable_cost) * base_units - scenario.fixed_cost, 2)
        row_number = len(rows) + 1
        rows.append([
            n(price),
            f(f"(A{row_number}-$B$4)*$B$5-$B$3", profit if include_results else None),
        ])
    return build_sheet(rows)


def build_profit_matrix_sheet(scenario: Scenario, include_results: bool) -> str:
    rows = [
        [s("ProfitMatrix - Price and volume landscape", style=1), None, None, None, None, None],
        [s("This grid helps the team defend the recommendation during Q&A."), None, None, None, None, None],
        [s("Fixed Costs"), f("CostSetup!$G$6", scenario.fixed_cost if include_results else None), s("Variable Cost per Unit"), f("CostSetup!$G$7", scenario.variable_cost if include_results else None), None, None],
        [None, None, None, None, None, None],
    ]

    header_row = [s("Price / Volume", style=1)]
    for volume in scenario.matrix_volumes:
        header_row.append(n(volume, style=1))
    rows.append(header_row)

    for price in scenario.matrix_prices:
        row = [n(price, style=1)]
        for volume in scenario.matrix_volumes:
            profit = round((price - scenario.variable_cost) * volume - scenario.fixed_cost, 2)
            row_num = len(rows) + 1
            col_num = len(row) + 1
            volume_col = chr(64 + col_num)
            row.append(
                f(f"($A{row_num}-$D$3)*{volume_col}$5-$B$3", profit if include_results else None)
            )
        rows.append(row)

    return build_sheet(rows)


def build_dashboard_sheet(scenario: Scenario, include_key: bool) -> str:
    recommended = scenario.recommended_option
    chosen_label = recommended.label if include_key else ""
    recommended_profit = projected_profit(scenario, recommended)
    recommended_be = break_even_units(scenario, recommended)
    target_met = "Yes" if recommended_profit >= scenario.target_profit else "No"
    capacity_ok = "Yes" if recommended.forecast_units <= scenario.capacity else "No"
    downside_profit = min(round((price - scenario.variable_cost) * scenario.base_option.forecast_units - scenario.fixed_cost, 2) for price in scenario.sensitivity_prices)
    upside_profit = max(round((price - scenario.variable_cost) * scenario.base_option.forecast_units - scenario.fixed_cost, 2) for price in scenario.sensitivity_prices)

    rows = [
        [s("Dashboard - Final recommendation", style=1), None, None, None],
        [s("Choose one option and use the linked metrics below to defend the pricing decision."), None, None, None],
        [s("Recommended Option"), s(chosen_label), None, None],
        [None, None, None, None],
        [s("Metric", style=1), s("Value", style=1), None, None],
        [s("Recommended Price"), f('IF(B3="","",XLOOKUP(B3,PriceOptions!$A$7:$A$9,PriceOptions!$B$7:$B$9))', recommended.price if include_key else None), None, None],
        [s("Forecast Units"), f('IF(B3="","",XLOOKUP(B3,PriceOptions!$A$7:$A$9,PriceOptions!$C$7:$C$9))', recommended.forecast_units if include_key else None), None, None],
        [s("Projected Profit"), f('IF(B3="","",XLOOKUP(B3,PriceOptions!$A$7:$A$9,PriceOptions!$G$7:$G$9))', recommended_profit if include_key else None), None, None],
        [s("Break-Even Units"), f('IF(B3="","",XLOOKUP(B3,Feasibility!$A$6:$A$8,Feasibility!$C$6:$C$8))', recommended_be if include_key else None), None, None],
        [s("Target Met?"), f('IF(B3="","",IF(B8>=CostSetup!$G$9,"Yes","No"))', target_met if include_key else None, text=True), None, None],
        [s("Capacity OK?"), f('IF(B3="","",XLOOKUP(B3,Feasibility!$A$6:$A$8,Feasibility!$E$6:$E$8))', capacity_ok if include_key else None, text=True), None, None],
        [s("Downside Profit"), n(downside_profit), None, None],
        [s("Upside Profit"), n(upside_profit), None, None],
        [None, None, None, None],
        [s("Recommendation Statement", style=1), s(scenario.recommendation_text if include_key else ""), None, None],
        [s("Risk Statement", style=1), s(scenario.risk_text if include_key else ""), None, None],
        [None, None, None, None],
        [s("Option Summary", style=1), None, None, None],
        [s("Option", style=1), s("Price", style=1), s("Forecast Units", style=1), s("Projected Profit", style=1)],
    ]

    for option in scenario.options:
        rows.append([s(option.label), n(option.price), n(option.forecast_units), n(projected_profit(scenario, option))])

    return build_sheet(rows)


def write_scenario_workbooks(scenario: Scenario) -> None:
    student_sheets = [
        ("CostSetup", build_cost_setup_sheet(scenario, include_key=False)),
        ("PriceOptions", build_price_options_sheet(scenario, include_results=False)),
        ("Feasibility", build_feasibility_sheet(scenario, include_results=False)),
        ("TargetProfit", build_target_profit_sheet(scenario, include_results=False)),
        ("PriceSensitivity", build_price_sensitivity_sheet(scenario, include_results=False)),
        ("ProfitMatrix", build_profit_matrix_sheet(scenario, include_results=False)),
        ("Dashboard", build_dashboard_sheet(scenario, include_key=False)),
    ]
    teacher_sheets = [
        ("CostSetup", build_cost_setup_sheet(scenario, include_key=True)),
        ("PriceOptions", build_price_options_sheet(scenario, include_results=True)),
        ("Feasibility", build_feasibility_sheet(scenario, include_results=True)),
        ("TargetProfit", build_target_profit_sheet(scenario, include_results=True)),
        ("PriceSensitivity", build_price_sensitivity_sheet(scenario, include_results=True)),
        ("ProfitMatrix", build_profit_matrix_sheet(scenario, include_results=True)),
        ("Dashboard", build_dashboard_sheet(scenario, include_key=True)),
    ]

    write_workbook_file(
        RESOURCES_DIR,
        f"unit06-pbl-pricing-project-{scenario.group_id}-student.xlsx",
        student_sheets,
        styles=BOLD_STYLES,
    )
    write_workbook_file(
        RESOURCES_DIR,
        f"unit06-pbl-pricing-project-{scenario.group_id}-teacher.xlsx",
        teacher_sheets,
        styles=BOLD_STYLES,
    )


def main() -> None:
    for scenario in SCENARIOS:
        write_scenario_workbooks(scenario)


if __name__ == "__main__":
    main()
