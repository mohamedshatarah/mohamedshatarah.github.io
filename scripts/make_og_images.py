"""Draw the 1200 x 630 social preview images in public/og/.

    python scripts/make_og_images.py <fonts dir> <site root>

<fonts dir> holds Inter-Regular.ttf, Inter-SemiBold.ttf and InterDisplay-Bold.ttf (Inter, under
the SIL Open Font License). Text matches src/data/site.ts and the stormwater page; images come
from src/assets.
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

fonts, root = Path(sys.argv[1]), Path(sys.argv[2])
out = root / "public" / "og"
out.mkdir(parents=True, exist_ok=True)
NAVY, TEAL, INK, MUTED = (22, 50, 79), (0, 121, 124), (27, 37, 48), (85, 97, 108)
W, H = 1200, 630


def font(name, size):
    return ImageFont.truetype(str(fonts / name), size)


def wrap(draw, text, face, width):
    lines, line = [], ""
    for word in text.split():
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=face) <= width:
            line = trial
        else:
            lines.append(line)
            line = word
    return lines + [line]


def block(draw, xy, text, face, width, fill, gap):
    x, y = xy
    for line in wrap(draw, text, face, width):
        draw.text((x, y), line, font=face, fill=fill)
        y += face.size + gap
    return y


def frame():
    image = Image.new("RGB", (W, H), "white")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, H - 14, W, H), fill=NAVY)
    draw.rectangle((0, H - 14, 360, H), fill=TEAL)
    return image, draw


def paste(image, path, box):
    """Fit the picture inside box (x, y, width, height), enlarging small figures if needed."""
    picture = Image.open(path).convert("RGBA")
    scale = min(box[2] / picture.width, box[3] / picture.height)
    picture = picture.resize((round(picture.width * scale), round(picture.height * scale)), Image.LANCZOS)
    x = box[0] + (box[2] - picture.width) // 2
    y = box[1] + (box[3] - picture.height) // 2
    image.paste(picture, (x, y), picture)


# Home: name, the headline and the introduction, with no single project beside the name.
image, draw = frame()
draw.text((72, 76), "PORTFOLIO", font=font("Inter-SemiBold.ttf", 24), fill=TEAL)
draw.text((72, 114), "Mohamed Shatarah", font=font("InterDisplay-Bold.ttf", 84), fill=NAVY)
headline = font("InterDisplay-Bold.ttf", 52)
draw.text((72, 232), "From physics to", font=headline, fill=NAVY)
draw.text((72, 296), "better decisions.", font=headline, fill=TEAL)
block(draw, (72, 404), "Mechanical engineer completing a Ph.D. in civil engineering, combining computational "
      "fluid dynamics (CFD), scientific machine learning and high-performance computing (HPC) to support "
      "design and control decisions in engineering systems.", font("Inter-Regular.ttf", 27), 1040, MUTED, 11)
image.save(out / "home.png", optimize=True)

# Stormwater case study: title, venue, and CFD beside the learned model for one test storm.
image, draw = frame()
draw.text((72, 80), "STORMWATER · J. ENVIRON. ENG., 2026", font=font("Inter-SemiBold.ttf", 22), fill=TEAL)
y = block(draw, (72, 122), "An 18.5-hour transient 3D storm simulation, replayed in 7 seconds",
          font("InterDisplay-Bold.ttf", 54), 520, NAVY, 8)
draw.text((72, y + 24), "Mohamed Shatarah", font=font("Inter-Regular.ttf", 28), fill=INK)
# The panels carry their own CFD and ML labels, so only a caption is added.
paste(image, root / "src/assets/stormwater/high-cfd.png", (620, 120, 270, 300))
paste(image, root / "src/assets/stormwater/high-ml.png", (900, 120, 270, 300))
draw.text((895, 448), "A test storm the model never saw", font=font("Inter-Regular.ttf", 22), fill=MUTED, anchor="ma")
image.save(out / "stormwater.png", optimize=True)

# v2: one preview per project page: kicker, title, name, and the page's lead picture on the right.
PAGES = [
    ("air2o-hvac", "HVAC · AIR2O", "Using CFD to cut the predicted energy use of HVAC designs by 31%", ["ahu-velocity-tile.jpg"]),
    ("heat-storage", "THERMAL STORAGE · J. ENERGY STORAGE, 2024", "Fin geometry that shortens the charging time of a heat-storage unit", ["pcm-row.jpg"]),
    ("numerical-methods", "HOW I WORK", "Below the surrogates: turbulence, solvers, meshes and computing", ["channel-streaks.png"]),
    ("piv-reduced-order-model", "REDUCED-ORDER MODELING · 2024", "Extracting dominant structures in a turbulent flow from 9,000 PIV measurements", ["pod-lab.jpg"]),
    ("energy-and-design", "ENERGY CONVERSION AND DESIGN", "Hydrogen cells, solar heat and mechanical design", ["pem-fuel-cell.jpg", "cad-fan-array.jpg"]),
]
for stem, kicker, title, pictures in PAGES:
    image, draw = frame()
    draw.text((72, 80), kicker, font=font("Inter-SemiBold.ttf", 22), fill=TEAL)
    y = block(draw, (72, 122), title, font("InterDisplay-Bold.ttf", 50), 540, NAVY, 8)
    draw.text((72, y + 24), "Mohamed Shatarah", font=font("Inter-Regular.ttf", 28), fill=INK)
    width = 500 // len(pictures)
    for k, name in enumerate(pictures):
        paste(image, root / "src/assets/img" / name, (650 + k * (width + 10), 110, width, 400))
    image.save(out / f"{stem}.png", optimize=True)

print(sorted(p.name for p in out.glob("*.png")))
