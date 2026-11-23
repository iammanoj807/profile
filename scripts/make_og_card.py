"""Redraw the text half of public/og-card.png (keeps the portrait half). Font: Source Sans 3 from github.com/google/fonts (ofl/sourcesans3). Usage: uv run --with pillow python scripts/make_og_card.py public/og-card.png out.png SourceSans3.ttf (edit `lines` first)."""
import sys
from PIL import Image, ImageDraw, ImageFont

SRC, OUT, FONT = sys.argv[1], sys.argv[2], sys.argv[3]
im = Image.open(SRC).convert("RGB")
W, H = im.size

def darkest(box):
    reg = im.crop(box)
    return min(reg.getdata(), key=sum)

# text bands measured on the old card: (top, bottom)
bands = [(183, 246), (288, 316), (362, 387), (448, 473)]
colors = [darkest((80, t, 740, b)) for t, b in bands[:3]] + [(0x17, 0x64, 0xc0)]
weights = [400, 400, 400, 600]
lines = [
    "Manoj Kumar Thapa",
    "Prospective PhD student in machine learning",
    "LLM agents · computer vision · reliable ML",
    "iammanoj807.github.io/profile",
]
old_lines = ["Manoj Kumar Thapa", "AI engineer · MSc AI, Aston University", "LLM agents · retrieval · ML evaluation", "iammanoj807.github.io/profile"]

out = im.copy()
d = ImageDraw.Draw(out)
d.rectangle((0, 12, 770, H), fill=(255, 255, 255))

def font(size, wght):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([wght])
    return f

for (top, bottom), text, old, col, wg in zip(bands, lines, old_lines, colors, weights):
    # pick the size whose ink height for the OLD text matches the old band height
    target = bottom - top
    size = min(range(14, 120), key=lambda s: abs((lambda b: b[3] - b[1])(d.textbbox((0, 0), old, font=font(s, wg), anchor="ls")) - target))
    f = font(size, wg)
    bb = d.textbbox((0, 0), text, font=f, anchor="ls")
    width = bb[2] - bb[0]
    while 80 + width > 740:  # keep clear of the portrait
        size -= 1; f = font(size, wg); bb = d.textbbox((0, 0), text, font=f, anchor="ls"); width = bb[2] - bb[0]
    old_bb = d.textbbox((0, 0), old, font=f, anchor="ls")
    baseline = top - old_bb[1]
    d.text((80, baseline), text, font=f, fill=col, anchor="ls")
    print(f"{text!r}: size {size}, weight {wg}, width {width}, colour #{col[0]:02x}{col[1]:02x}{col[2]:02x}")
out.save(OUT, optimize=True)
