// Every project, in the order the site presents them. The Ph.D. research comes first, as one card
// among equals; it links to its manuscripts, and each other project is its own page.
import sepCfd from '../assets/img/sep-cfd.jpg';
import ahuVelocity from '../assets/img/ahu-velocity-tile.jpg';
import pcmRow from '../assets/img/pcm-row.jpg';
import channelStreaks from '../assets/img/channel-streaks.png';
import podLab from '../assets/img/pod-lab.jpg';
import pemFuelCell from '../assets/img/pem-fuel-cell.jpg';
import sepMl from '../assets/img/sep-ml.jpg';
import fanArray from '../assets/img/cad-fan-array.jpg';

// A card shows one picture (thumb), one or two labeled pictures (thumbs) or a diagram. linkLabel
// replaces "Read more". On wide screens a row is 24 columns and a card takes 8 of them; desktopSpan
// lets two cards share a row unevenly, split so that their texts end at the same height. tabletFull
// makes a card fill its row on tablet-width screens.
export type Thumb = { src: ImageMetadata; alt: string; label: string };
export type Project = { href: string; kicker: string; title: string; summary: string; thumb?: ImageMetadata; thumbAlt?: string; thumbs?: Thumb[]; cover?: boolean; diagram?: 'coupled-plant'; linkLabel?: string; desktopSpan?: number; tabletFull?: boolean };
export const projects: Project[] = [
  {
    // Under review: no project page until the manuscripts are published, so the card links to them.
    href: '/#under-review', kicker: 'Wastewater treatment · Ph.D. research · Under review',
    title: 'Better decisions for water infrastructure',
    summary: 'My research aims to help engineers make better decisions about the design and control of wastewater and stormwater treatment infrastructure. Two first-author manuscripts are under review; the talk on this work won the SE3 2026 Best Presentation Award.',
    diagram: 'coupled-plant',
    // Wider than a third of the row, so the plant diagram can be read. It shares the first row with
    // the stormwater card, split so that both texts end at the same height.
    desktopSpan: 13, tabletFull: true,
    linkLabel: 'The manuscripts',
  },
  {
    href: '/projects/stormwater/', kicker: 'Stormwater treatment · J. Environ. Eng., 2026', desktopSpan: 11,
    title: 'An 18.5-hour transient 3D storm simulation, replayed in 7 seconds',
    summary: 'Can a learned model reproduce unsteady 3D flow and particle transport? I tested it on a stormwater separator, where every storm is different.',
    thumbs: [
      { src: sepCfd, alt: 'Particle concentration in a stormwater separator during a test storm, from CFD.', label: 'CFD' },
      { src: sepMl, alt: 'The same storm as the learned model predicts it.', label: 'Learned model' },
    ],
  },
  {
    href: '/projects/air2o-hvac/', kicker: 'HVAC · Air2O · 2021 – 2023',
    title: 'Using CFD to cut the predicted energy use of HVAC designs by 31%',
    summary: 'At Air2O I used Ansys CFD to guide HVAC designs and cooling technologies, including a 69,800-cfm air-handling unit with its coils and fans modeled by their effect.',
    thumb: ahuVelocity, thumbAlt: 'Velocity on the symmetry plane of an air-handling unit, from CFD: air accelerates through the fan opening into the outlet duct.', cover: true,
  },
  {
    href: '/projects/heat-storage/', kicker: 'Thermal energy storage · J. Energy Storage, 2024',
    title: 'Fin geometry that shortens the charging time of a heat-storage unit',
    summary: '42.6% shorter melting time, 20 mm against 5 mm fins at +30°, simulated. Validated against a published measurement; largest deviation 4.1%.',
    thumb: pcmRow, thumbAlt: 'Four finned heat-storage units after 18 minutes of charging, colored by temperature and liquid fraction; longer fins have melted more of the paraffin.',
  },
  {
    href: '/projects/numerical-methods/', kicker: 'Turbulence, solvers, meshes and computing · 2020 – 2025',
    title: 'Below the surrogates: turbulence, solvers, meshes and computing',
    summary: 'Direct numerical simulation (DNS) of turbulent channel flow, flow solvers checked against benchmarks, a C++ mesh generator, and 5,000 automated OpenFOAM runs.',
    thumb: channelStreaks, thumbAlt: 'Streamwise velocity near the wall of a turbulent channel at one instant: long fast and slow streaks run in the flow direction.',
  },
  {
    href: '/projects/piv-reduced-order-model/', kicker: 'Reduced-order modeling (ROM) · measured flow · 2024', desktopSpan: 13,
    title: 'Extracting dominant structures in a turbulent flow from 9,000 PIV measurements',
    summary: 'Reduced-order modeling describes a flow by a few dominant patterns, found here by proper orthogonal decomposition (POD) of particle image velocimetry (PIV) measured flow in a model separator.',
    thumb: podLab, thumbAlt: 'A transparent model separator in a dark laboratory, lit green by a laser sheet.', cover: true,
  },
  {
    href: '/projects/energy-and-design/', kicker: 'Energy conversion and design · 2020 – 2023',
    title: 'Hydrogen cells, solar heat and mechanical design',
    summary: 'Shorter projects from freelance work, Air2O and my mechanical engineering degree. The electrolyzer, the solar collector and the vortex tube were each compared with experimental data before their results were used.',
    // Two pictures, so the card reads as several projects, not one PEM study. It shares the last row
    // with the PIV card, split so that both texts end at the same height (measured: 11 of 24 here).
    desktopSpan: 11,
    thumbs: [
      { src: pemFuelCell, alt: "Current flux density on one periodic unit of a PEM fuel cell, simulated in Ansys Fluent.", label: 'PEM fuel cell' },
      { src: fanArray, alt: 'Rendered CAD model of a fan array: two fans in blue housings, mounted side by side in a frame.', label: 'Fan array design' },
    ],
  },
];

// Reading order for the previous / next links at the bottom of each project page.
export const sequence: { href: string; title: string }[] = projects
  .filter((p) => p.href.startsWith('/projects/'))
  .map((p) => ({ href: p.href, title: p.title }));
