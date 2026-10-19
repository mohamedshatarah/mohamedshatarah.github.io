"""Crop the stormwater explorer panels from Fig. 7 of the stormwater paper.

    python scripts/crop_stormwater_panels.py <path to the paper's Fig. 7 as PNG> src/assets/stormwater

Fig. 7 (1950 x 1060 px) shows three test storms (high, medium and low accuracy), each
as CFD, ML and absolute-error panels, plus the two color bars. Frame lines were found
at x = 708-710, 1045-1047, 1094-1096, 1430-1433, 1480-1482, 1817-1819 and
y = 10-11, 340-342, 363-365, 693-695, 718-719, 1048-1050. The ML panels sit one pixel
left of the CFD panels' position, so the ML crops start 385 px right of the CFD crops,
which makes the two line up exactly under the comparison slider. Each crop starts one
pixel inside the anti-aliased frame edges (columns 711, 1097 and 1483 are partly dark).
Pixels are not resampled or edited; transparent areas are flattened on white.
"""
import sys
from pathlib import Path

from PIL import Image

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
rgba = Image.open(src).convert("RGBA")
figure = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
figure.alpha_composite(rgba)
figure = figure.convert("RGB")

W, H = 331, 325
CFD_X, ML_X, ERR_X = 713, 1098, 1484
ROWS = {"high": 13, "medium": 367, "low": 721}
for name, y in ROWS.items():
    for kind, x in (("cfd", CFD_X), ("ml", ML_X), ("error", ERR_X)):
        figure.crop((x, y, x + W, y + H)).save(out / f"{name}-{kind}.png", optimize=True)
# The two color bars with their labels, bottom left of the figure.
figure.crop((55, 795, 640, 945)).save(out / "legend-concentration.png", optimize=True)
figure.crop((55, 950, 640, 1045)).save(out / "legend-error.png", optimize=True)
print(sorted(p.name for p in out.glob("*.png")))
