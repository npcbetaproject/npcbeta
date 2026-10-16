"""Export the checked-in 5x2 grayscale atlases to the runtime portrait collection."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageChops
import json

ROOT = Path(__file__).resolve().parents[1]
PROJECT = ROOT / 'project/generated-portraits'
config = json.loads((ROOT / 'docs/data/generator/portraits.json').read_text())
summary = []
review = Image.new('RGB', (920, 2660), '#f1efeb')
draw = ImageDraw.Draw(review)
for row, group in enumerate(config['types']):
    draw.text((10, row * 266 + 4), group['label'], fill='#222222')
    for start in range(1, len(group["portraits"]) + 1, 10):
        atlas = Image.open(PROJECT / f'sources/{group["id"]}-{start:02}-{start+9:02}.webp').convert('L')
        width, height = atlas.size
        assert abs(width / height - 2.5) < 0.02, (group['id'], atlas.size)
        assert width / 5 >= 280 and height / 2 >= 280, 'Source must supply true 280px detail'
        for offset in range(10):
            portrait = group['portraits'][start - 1 + offset]
            x, y = offset % 5, offset // 5
            face = atlas.crop((round(x * width / 5), round(y * height / 2), round((x+1) * width / 5), round((y+1) * height / 2)))
            face = face.resize((280, 280), Image.Resampling.LANCZOS)
            path = ROOT / 'docs' / portrait['image']
            path.parent.mkdir(parents=True, exist_ok=True)
            face.save(path, format='WEBP', quality=75, method=6)
            decoded = Image.open(path).convert('RGB')
            assert decoded.size == (280, 280)
            red, green, blue = decoded.split()
            # Lossy WebP's YUV conversion can round neutral channels by one level.
            assert ImageChops.difference(red, green).getextrema()[1] <= 1
            assert ImageChops.difference(red, blue).getextrema()[1] <= 1
            assert path.stat().st_size <= 20000
            index = start - 1 + offset
            review.paste(decoded.resize((70, 70), Image.Resampling.LANCZOS), (10 + index % 10 * 91, row * 266 + 24 + index // 10 * 80))
            draw.text((10 + index % 10 * 91, row * 266 + 94 + index // 10 * 80), f'{index+1:02}', fill='#222222')
            summary.append({'id': portrait['id'], 'width': 280, 'height': 280, 'bytes': path.stat().st_size, 'quality': 75})
review.save(PROJECT / 'portrait-collection.webp', quality=85, method=6)
(PROJECT / 'export-summary.json').write_text(json.dumps(summary, indent=2) + '\n')
sizes = [item['bytes'] for item in summary]
print(f'{len(summary)} grayscale portraits at 280x280; {sum(sizes):,} bytes total; {min(sizes):,}-{max(sizes):,} bytes each')
