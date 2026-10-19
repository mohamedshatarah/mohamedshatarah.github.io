# Mohamed Shatarah: portfolio website

The source of Mohamed Shatarah's portfolio website, [mohamedshatarah.github.io](https://mohamedshatarah.github.io). It is a static site built with [Astro](https://astro.build) and hosted free on GitHub Pages. The site covers simulation, scientific machine learning, and their use in engineering design.

## Run it locally

You need Node.js 22 or newer. From this folder:

```powershell
npm ci           # install the pinned dependencies (package-lock.json)
npm run dev      # then open http://localhost:4321
npm run build    # write the finished site to dist/
npm run preview  # serve dist/ to check the build
```

To turn off Astro's anonymous usage reporting on your computer, run `npx astro telemetry disable`.

## Publish it

The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`. The repository's Pages source is set to **GitHub Actions**, and `site` in `astro.config.mjs` holds the public address, so canonical links and link previews point to it.

## Pages

| Address | Page |
| --- | --- |
| `/` | Home: name and introduction, seven project cards with the Ph.D. research first, publications, About |
| `/projects/stormwater/` | Learned model of transient 3D flow in a stormwater separator, with the storm explorer |
| `/projects/air2o-hvac/` | CFD for HVAC design at Air2O |
| `/projects/heat-storage/` | Fin design for a phase-change heat-storage unit |
| `/projects/numerical-methods/` | Turbulence, flow solvers, meshes and computing at scale |
| `/projects/piv-reduced-order-model/` | Reduced-order modeling of 9,000 measured PIV fields |
| `/projects/energy-and-design/` | Electrolyzer, fuel cell, solar collector, vortex tube and mechanical design |
| `/experience/` | Education, research, industry, teaching, leadership, awards and skills |

## Files

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | Name, headline, contact links and the date shown in the footer |
| `src/data/projects.ts` | The project cards and the reading order of the project pages |
| `src/data/publications.ts` | Papers, manuscripts and conference presentations |
| `src/pages/` | One file per page |
| `src/layouts/` | The page frame (`Base.astro`) and the frame for project pages (`ProjectLayout.astro`) |
| `src/components/` | Reusable parts: figures, stat tiles, the storm explorer, icons, the coupled-plant diagram |
| `src/diagrams/` | Diagrams drawn as SVG and inlined by `Diagram.astro` |
| `src/assets/` | Images, resized and converted to WebP at build time |
| `public/charts/`, `public/og/` | Charts, and the link-preview images shown when a page is shared |
| `scripts/make_og_images.py` | Draws the link-preview images (Python with Pillow) |
| `scripts/crop_stormwater_panels.py` | Crops the storm explorer's panels from the paper's figure |

## Content

The text and images are Mohamed Shatarah's portfolio content. No licence is granted to reuse them. Figures from published papers are credited to their journals on the pages where they appear. The Inter typeface is used under the SIL Open Font License.
