from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List, Optional
from zipfile import ZipFile, ZIP_DEFLATED
from datetime import datetime

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

BOLD_STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
'''


def esc(text: str) -> str:
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&apos;'))


def col_letter(index: int) -> str:
    result = ''
    while index > 0:
        index, rem = divmod(index - 1, 26)
        result = chr(65 + rem) + result
    return result


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


def app_props(sheet_titles: List[str]) -> str:
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


def workbook_xml(sheet_titles: List[str], defined_names: Optional[List[str]] = None) -> str:
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
    lines = '\n'.join(
        f'  <Relationship Id="rId{idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    lines += f"\n  <Relationship Id=\"rId{sheet_count+1}\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/>"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{lines}
</Relationships>
'''


def content_types(sheet_count: int) -> str:
    sheet_entries = '\n'.join(
        f'  <Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for idx in range(1, sheet_count + 1)
    )
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
{sheet_entries}
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'''


def build_sheet(grid: List[List[Optional[dict]]], extra: str = '') -> str:
    row_xml: List[str] = []
    max_cols = max((len(row) for row in grid), default=0)
    last_col = col_letter(max_cols) if max_cols else 'A'
    dimension = f'A1:{last_col}{len(grid)}' if grid else 'A1:A1'
    for r_idx, row in enumerate(grid, start=1):
        cells: List[str] = []
        for c_idx, cell in enumerate(row, start=1):
            address = f'{col_letter(c_idx)}{r_idx}'
            if cell is None:
                cells.append(f'<c r="{address}"/>')
                continue
            value = cell.get('value')
            formula = cell.get('formula')
            style = cell.get('style')
            data_type = cell.get('type', 'number')
            result = cell.get('result')
            attrs = [f'r="{address}"']
            if style is not None:
                attrs.append(f's="{style}"')
            cell_xml = ''
            attrs_str = ' '.join(attrs)
            if formula is not None:
                if data_type == 'str':
                    attrs_str = f'{attrs_str} t="str"'
                cell_xml = f'<c {attrs_str}><f>{esc(formula)}</f>'
                if result is not None:
                    cell_xml += f'<v>{esc(str(result))}</v>'
                cell_xml += '</c>'
            else:
                if data_type == 'str':
                    cell_xml = f'<c {attrs_str} t="inlineStr"><is><t>{esc(str(value) if value is not None else "")}</t></is></c>'
                else:
                    if value is None:
                        cell_xml = f'<c {attrs_str}/>'
                    else:
                        cell_xml = f'<c {attrs_str}><v>{value}</v></c>'
            cells.append(cell_xml)
        row_xml.append(f'<row r="{r_idx}" spans="1:{max_cols}">{"".join(cells)}</row>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="{dimension}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <selection activeCell="A1" sqref="A1"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>
    {'\n    '.join(row_xml)}
  </sheetData>
{extra}</nworksheet>
'''.replace('</nworksheet>', '</worksheet>')


def write_workbook_file(base: Path, filename: str, sheets: List[tuple[str, str]], defined_names: Optional[List[str]] = None, styles: str = DEFAULT_STYLES):
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
    for idx, (_, xml) in enumerate(sheets, start=1):
        mapping[f'xl/worksheets/sheet{idx}.xml'] = xml
    with ZipFile(base / filename, 'w', ZIP_DEFLATED) as zf:
        for path, data in mapping.items():
            zf.writestr(path, data)
    print('Wrote', filename)

__all__ = [
    'DEFAULT_STYLES',
    'BOLD_STYLES',
    'build_sheet',
    'write_workbook_file',
]
