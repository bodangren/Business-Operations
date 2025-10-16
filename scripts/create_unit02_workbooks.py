from __future__ import annotations
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from datetime import datetime

BASE_DIR = Path('bus-math-nextjs/public/resources')
BASE_DIR.mkdir(parents=True, exist_ok=True)

DATE_STAMP = datetime(2025, 2, 13, 12, 0, 0)

DEFAULT_STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="1">
    <font>
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
  <cellXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''

BOLD_CURRENCY_STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="1">
    <numFmt numFmtId="165" formatCode="$#,##0.00"/>
  </numFmts>
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
  <cellXfs count="3">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="165" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''

def esc(text: str) -> str:
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&apos;'))


def core_props() -> str:
    iso = DATE_STAMP.strftime('%Y-%m-%dT%H:%M:%SZ')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>Math for Business Operations</dc:creator>
  <cp:lastModifiedBy>Math for Business Operations</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">{iso}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">{iso}</dcterms:modified>
</cp:coreProperties>
'''


def app_props(sheet_titles: list[str]) -> str:
    heading_pairs = f'''    <vt:vector size="2" baseType="variant">
      <vt:variant>
        <vt:lpstr>Worksheets</vt:lpstr>
      </vt:variant>
      <vt:variant>
        <vt:i4>{len(sheet_titles)}</vt:i4>
      </vt:variant>
    </vt:vector>'''
    titles = '\n'.join(f'      <vt:lpstr>{esc(title)}</vt:lpstr>' for title in sheet_titles)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
  <Company>TechStart Solutions</Company>
  <LinksUpToDate>false</LinksUpToDate>
  <SharedDoc>false</SharedDoc>
  <HyperlinksChanged>false</HyperlinksChanged>
  <AppVersion>16.0300</AppVersion>
</Properties>
'''


def rels_root() -> str:
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
'''


def workbook_xml(sheet_titles: list[str], defined_names: list[str] | None = None) -> str:
    sheets_xml = '\n'.join(
        f'    <sheet name="{esc(name)}" sheetId="{idx}" r:id="rId{idx}"/>'
        for idx, name in enumerate(sheet_titles, start=1)
    )
    if defined_names:
        dn = '\n'.join(defined_names)
        defined = f"  <definedNames>\n{dn}\n  </definedNames>\n"
    else:
        defined = ''
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
'''


def workbook_rels(sheet_count: int) -> str:
    items = '\n'.join(
        f'  <Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    items += f"\n  <Relationship Id=\"rId{sheet_count+1}\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/>"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{items}
</Relationships>
'''


def content_types(sheet_count: int) -> str:
    sheets = '\n'.join(
        f'  <Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
{sheets}
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'''


def sheet_wrapper(dimension: str, rows_xml: str, extra: str = '') -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="{dimension}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <selection activeCell="A2" sqref="A2"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>
    {rows_xml}
  </sheetData>
{extra}</nworksheet>
'''.replace('</nworksheet>', '</worksheet>')


def write_workbook(filename: str, sheets: list[tuple[str, str]], defined_names: list[str] | None = None, styles: str = DEFAULT_STYLES):
    sheet_titles = [name for name, _ in sheets]
    mapping = {
        '[Content_Types].xml': content_types(len(sheets)),
        '_rels/.rels': rels_root(),
        'docProps/core.xml': core_props(),
        'docProps/app.xml': app_props(sheet_titles),
        'xl/workbook.xml': workbook_xml(sheet_titles, defined_names),
        'xl/_rels/workbook.xml.rels': workbook_rels(len(sheets)),
        'xl/styles.xml': styles,
    }
    for idx, (_, xml_content) in enumerate(sheets, start=1):
        mapping[f'xl/worksheets/sheet{idx}.xml'] = xml_content
    with ZipFile(BASE_DIR / filename, 'w', ZIP_DEFLATED) as zf:
        for path, data in mapping.items():
            zf.writestr(path, data)
    print('Wrote', filename)


# Lesson 4 Student
lesson4_student_rows = '\n    '.join([
    '<row r="1" spans="1:2"><c r="A1" t="inlineStr"><is><t>Item</t></is></c><c r="B1" t="inlineStr"><is><t>Amount</t></is></c></row>',
    '<row r="2" spans="1:2"><c r="A2" t="inlineStr"><is><t>Total Revenue</t></is></c><c r="B2"><v>18500</v></c></row>',
    '<row r="3" spans="1:2"><c r="A3" t="inlineStr"><is><t>Total Expenses</t></is></c><c r="B3"><v>9400</v></c></row>',
    '<row r="4" spans="1:2"><c r="A4" t="inlineStr"><is><t>Net Income</t></is></c></row>',
])
lesson4_student_sheet = sheet_wrapper('A1:B4', lesson4_student_rows)
write_workbook('unit02-lesson04-student.xlsx', [('Summary', lesson4_student_sheet)])

# Lesson 4 Teacher with defined names
lesson4_teacher_rows = '\n    '.join([
    '<row r="1" spans="1:2"><c r="A1" t="inlineStr"><is><t>Item</t></is></c><c r="B1" t="inlineStr"><is><t>Amount</t></is></c></row>',
    '<row r="2" spans="1:2"><c r="A2" t="inlineStr"><is><t>Total Revenue</t></is></c><c r="B2"><v>18500</v></c></row>',
    '<row r="3" spans="1:2"><c r="A3" t="inlineStr"><is><t>Total Expenses</t></is></c><c r="B3"><v>9400</v></c></row>',
    '<row r="4" spans="1:2"><c r="A4" t="inlineStr"><is><t>Net Income</t></is></c><c r="B4"><f>Total_Revenue-Total_Expenses</f><v>9100</v></c></row>',
])
lesson4_teacher_sheet = sheet_wrapper('A1:B4', lesson4_teacher_rows)
lesson4_defined = [
    '    <definedName name="Total_Expenses">Summary!$B$3</definedName>',
    '    <definedName name="Total_Revenue">Summary!$B$2</definedName>',
    '    <definedName name="Net_Income">Summary!$B$4</definedName>',
]
write_workbook('unit02-lesson04-teacher.xlsx', [('Summary', lesson4_teacher_sheet)], lesson4_defined)

# Lesson 5 Student
adjustment_rows_student = []
headers = ['Asset', 'Cost', 'Salvage', 'Useful Life (Years)', 'Annual Depreciation']
header_cells = ''.join(
    f'<c r="{chr(65+i)}1" t="inlineStr"><is><t>{esc(val)}</t></is></c>' for i, val in enumerate(headers)
)
adjustment_rows_student.append(f'<row r="1" spans="1:5">{header_cells}</row>')
assets = [
    ('Company Van',32000,4000,5),
    ('Laptop Set',5800,800,4),
    ('Warehouse Shelving',7400,900,6),
    ('Software License',2600,0,3),
]
for idx, (name, cost, salvage, life) in enumerate(assets, start=2):
    row = ''.join([
        f'<c r="A{idx}" t="inlineStr"><is><t>{esc(name)}</t></is></c>',
        f'<c r="B{idx}"><v>{cost}</v></c>',
        f'<c r="C{idx}"><v>{salvage}</v></c>',
        f'<c r="D{idx}"><v>{life}</v></c>',
        f'<c r="E{idx}"/>',
    ])
    adjustment_rows_student.append(f'<row r="{idx}" spans="1:5">{row}</row>')
adjustment_rows_student.append('<row r="6" spans="1:5"><c r="A6" t="inlineStr"><is><t>Total Annual Depreciation</t></is></c><c r="B6"/><c r="C6"/><c r="D6"/><c r="E6"/></row>')
lesson5_student_adjust_sheet = sheet_wrapper('A1:E6', '\n    '.join(adjustment_rows_student))
lesson5_student_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_student_adjust_sheet),
]
write_workbook('unit02-lesson05-student.xlsx', lesson5_student_sheets, lesson4_defined)

# Lesson 5 Teacher
adjustment_rows_teacher = []
adjustment_rows_teacher.append(f'<row r="1" spans="1:5">{header_cells}</row>')
for idx, (name, cost, salvage, life) in enumerate(assets, start=2):
    formula = f'ROUND(SLN(B{idx},C{idx},D{idx}),2)'
    dep_value = round((cost - salvage)/life, 2)
    row = ''.join([
        f'<c r="A{idx}" t="inlineStr"><is><t>{esc(name)}</t></is></c>',
        f'<c r="B{idx}"><v>{cost}</v></c>',
        f'<c r="C{idx}"><v>{salvage}</v></c>',
        f'<c r="D{idx}"><v>{life}</v></c>',
        f'<c r="E{idx}"><f>{formula}</f><v>{dep_value}</v></c>',
    ])
    adjustment_rows_teacher.append(f'<row r="{idx}" spans="1:5">{row}</row>')
total_row = '<row r="6" spans="1:5"><c r="A6" t="inlineStr"><is><t>Total Annual Depreciation</t></is></c><c r="B6"/><c r="C6"/><c r="D6"/><c r="E6"><f>SUM(E2:E5)</f><v>8800</v></c></row>'
adjustment_rows_teacher.append(total_row)
lesson5_teacher_adjust_sheet = sheet_wrapper('A1:E6', '\n    '.join(adjustment_rows_teacher))
lesson5_teacher_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_teacher_adjust_sheet),
]
write_workbook('unit02-lesson05-teacher.xlsx', lesson5_teacher_sheets, lesson4_defined)

# Lesson 6 Student
macro_rows = [
    '<row r="1" spans="1:4"><c r="A1" t="inlineStr"><is><t>TechStart Month-End Snapshot</t></is></c></row>',
    '<row r="2" spans="1:4"><c r="A2"/></row>',
    '<row r="3" spans="1:4"><c r="A3" t="inlineStr"><is><t>Account</t></is></c><c r="B3" t="inlineStr"><is><t>Amount</t></is></c><c r="C3" t="inlineStr"><is><t>Variance</t></is></c><c r="D3" t="inlineStr"><is><t>Notes</t></is></c></row>',
    '<row r="4" spans="1:4"><c r="A4" t="inlineStr"><is><t>Consulting Revenue</t></is></c><c r="B4"><v>7200</v></c><c r="C4"><v>450</v></c><c r="D4" t="inlineStr"><is><t>Retainer cleared</t></is></c></row>',
    '<row r="5" spans="1:4"><c r="A5" t="inlineStr"><is><t>Software Subscriptions</t></is></c><c r="B5"><v>1850</v></c><c r="C5"><v>-120</v></c><c r="D5" t="inlineStr"><is><t>Annual fee posted</t></is></c></row>',
    '<row r="6" spans="1:4"><c r="A6" t="inlineStr"><is><t>Contract Labor</t></is></c><c r="B6"><v>3400</v></c><c r="C6"><v>600</v></c><c r="D6" t="inlineStr"><is><t>Added QA testers</t></is></c></row>',
    '<row r="7" spans="1:4"><c r="A7" t="inlineStr"><is><t>Marketing Spend</t></is></c><c r="B7"><v>1250</v></c><c r="C7"><v>-80</v></c><c r="D7" t="inlineStr"><is><t>Campaign paused</t></is></c></row>',
]
macro_sheet_student = sheet_wrapper('A1:D7', '\n    '.join(macro_rows))
lesson6_student_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_teacher_adjust_sheet),
    ('MacroPractice', macro_sheet_student),
]
write_workbook('unit02-lesson06-student.xlsx', lesson6_student_sheets, lesson4_defined)

# Lesson 6 Teacher
macro_rows_teacher = [
    '<row r="1" spans="1:4"><c r="A1" s="1" t="inlineStr"><is><t>TechStart Month-End Snapshot</t></is></c></row>',
    '<row r="2" spans="1:4"><c r="A2"/></row>',
    '<row r="3" spans="1:4"><c r="A3" s="1" t="inlineStr"><is><t>Account</t></is></c><c r="B3" s="1" t="inlineStr"><is><t>Amount</t></is></c><c r="C3" s="1" t="inlineStr"><is><t>Variance</t></is></c><c r="D3" s="1" t="inlineStr"><is><t>Notes</t></is></c></row>',
    '<row r="4" spans="1:4"><c r="A4" t="inlineStr"><is><t>Consulting Revenue</t></is></c><c r="B4" s="2"><v>7200</v></c><c r="C4" s="2"><v>450</v></c><c r="D4" t="inlineStr"><is><t>Retainer cleared</t></is></c></row>',
    '<row r="5" spans="1:4"><c r="A5" t="inlineStr"><is><t>Software Subscriptions</t></is></c><c r="B5" s="2"><v>1850</v></c><c r="C5" s="2"><v>-120</v></c><c r="D5" t="inlineStr"><is><t>Annual fee posted</t></is></c></row>',
    '<row r="6" spans="1:4"><c r="A6" t="inlineStr"><is><t>Contract Labor</t></is></c><c r="B6" s="2"><v>3400</v></c><c r="C6" s="2"><v>600</v></c><c r="D6" t="inlineStr"><is><t>Added QA testers</t></is></c></row>',
    '<row r="7" spans="1:4"><c r="A7" t="inlineStr"><is><t>Marketing Spend</t></is></c><c r="B7" s="2"><v>1250</v></c><c r="C7" s="2"><v>-80</v></c><c r="D7" t="inlineStr"><is><t>Campaign paused</t></is></c></row>',
]
macro_sheet_teacher = sheet_wrapper('A1:D7', '\n    '.join(macro_rows_teacher))
lesson6_teacher_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_teacher_adjust_sheet),
    ('MacroPractice', macro_sheet_teacher),
]
write_workbook('unit02-lesson06-teacher.xlsx', lesson6_teacher_sheets, lesson4_defined, styles=BOLD_CURRENCY_STYLES)

# Lesson 7 Student
report_student_rows = [
    '<row r="1" spans="1:2"><c r="A1" t="inlineStr"><is><t>Month-End Report</t></is></c></row>',
    '<row r="2" spans="1:2"><c r="A2"/></row>',
    '<row r="3" spans="1:2"><c r="A3" t="inlineStr"><is><t>Total Revenue</t></is></c><c r="B3"><f>Summary!B2</f><v>18500</v></c></row>',
    '<row r="4" spans="1:2"><c r="A4" t="inlineStr"><is><t>Total Expenses</t></is></c><c r="B4"><f>Summary!B3</f><v>9400</v></c></row>',
    '<row r="5" spans="1:2"><c r="A5" t="inlineStr"><is><t>Depreciation Expense</t></is></c><c r="B5"/></row>',
    '<row r="6" spans="1:2"><c r="A6" t="inlineStr"><is><t>Net Income</t></is></c><c r="B6"><f>B3-(B4+B5)</f><v>9100</v></c></row>',
]
report_student_sheet = sheet_wrapper('A1:B6', '\n    '.join(report_student_rows))
lesson7_student_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_teacher_adjust_sheet),
    ('Report', report_student_sheet),
]
write_workbook('unit02-lesson07-student.xlsx', lesson7_student_sheets, lesson4_defined)

# Lesson 7 Teacher
report_teacher_rows = [
    '<row r="1" spans="1:2"><c r="A1" s="1" t="inlineStr"><is><t>Month-End Report</t></is></c></row>',
    '<row r="2" spans="1:2"><c r="A2"/></row>',
    '<row r="3" spans="1:2"><c r="A3" t="inlineStr"><is><t>Total Revenue</t></is></c><c r="B3"><f>Summary!B2</f><v>18500</v></c></row>',
    '<row r="4" spans="1:2"><c r="A4" t="inlineStr"><is><t>Total Expenses</t></is></c><c r="B4"><f>Summary!B3</f><v>9400</v></c></row>',
    '<row r="5" spans="1:2"><c r="A5" t="inlineStr"><is><t>Depreciation Expense</t></is></c><c r="B5"><f>Adjustments!E6</f><v>8800</v></c></row>',
    '<row r="6" spans="1:2"><c r="A6" t="inlineStr"><is><t>Net Income</t></is></c><c r="B6"><f>B3-(B4+B5)</f><v>300</v></c></row>',
]
report_teacher_sheet = sheet_wrapper('A1:B6', '\n    '.join(report_teacher_rows))
lesson7_teacher_sheets = [
    ('Summary', lesson4_teacher_sheet),
    ('Adjustments', lesson5_teacher_adjust_sheet),
    ('Report', report_teacher_sheet),
]
write_workbook('unit02-lesson07-teacher.xlsx', lesson7_teacher_sheets, lesson4_defined, styles=BOLD_CURRENCY_STYLES)

