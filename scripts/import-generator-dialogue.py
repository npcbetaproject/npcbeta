"""Import approved dialogue previews from the supplied pairing workbook."""
import argparse
import json
from pathlib import Path
import xml.etree.ElementTree as ET
import zipfile

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('workbook', type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
options = json.loads((root / 'docs/data/generator/options.json').read_text())
ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
normalize = lambda value: value.strip().casefold()
locations = {normalize(item['label']): item for item in options['locations']}
professions = {normalize(item['label']): item for item in options['professions']}
with zipfile.ZipFile(args.workbook) as archive:
    shared = []
    if 'xl/sharedStrings.xml' in archive.namelist():
        shared = [''.join(node.itertext()) for node in ET.fromstring(archive.read('xl/sharedStrings.xml')).findall('m:si', ns)]
    rows = []
    for row in ET.fromstring(archive.read('xl/worksheets/sheet1.xml')).findall('.//m:sheetData/m:row', ns):
        cells = {}
        for cell in row.findall('m:c', ns):
            value = cell.find('m:v', ns)
            text = value.text if value is not None else ''.join(cell.itertext())
            cells[''.join(filter(str.isalpha, cell.attrib['r']))] = shared[int(text)] if cell.get('t') == 's' else text
        rows.append(cells)
lookup = {}
for row in rows[1:]:
    location = locations[normalize(row['A'])]
    profession = professions[normalize(row['B'])]
    assert profession['id'] in location['professionIds'], f'Invalid pairing: {row}'
    previews = lookup.setdefault(location['id'], {})
    assert profession['id'] not in previews, f'Duplicate pairing: {row}'
    assert row['C'].strip(), f'Empty dialogue: {row}'
    previews[profession['id']] = row['C'].strip()
assert sum(map(len, lookup.values())) == sum(len(item['professionIds']) for item in options['locations'])
(root / 'docs/data/generator/dialogue.json').write_text(json.dumps(lookup, ensure_ascii=False, indent=2) + '\n')
print(f'Imported {sum(map(len, lookup.values()))} dialogue previews.')
