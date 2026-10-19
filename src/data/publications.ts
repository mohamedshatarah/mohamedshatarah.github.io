// The publication record. One-line notes reuse sentences from the project pages.

export type Paper = {
  authors: string; // Mohamed's name is wrapped in <b> when rendered
  year?: string;
  title: string;
  venue?: string;
  note?: string;
  links: { label: string; href: string }[];
  thumb: 'storm' | 'basin' | 'heat';
  highlight?: boolean;
};

export const journalPapers: Paper[] = [
  {
    authors: 'Shatarah, M., Liu, K., & Li, H.',
    year: '2026',
    title: 'Operator-based machine learning framework for generalizable prediction of unsteady treatment dynamics in stormwater infrastructure',
    venue: 'Journal of Environmental Engineering, 152(9), 04026047',
    note: 'An operator-learning model that predicts velocity and particle concentration anywhere in the separator, at any time in a storm, from five storm parameters.',
    links: [
      { label: 'Project page', href: '/projects/stormwater/' },
      { label: 'Paper', href: 'https://doi.org/10.1061/JOEEDU.EEENG-8600' },
      { label: 'Open-access preprint', href: 'https://arxiv.org/abs/2507.04682' },
      { label: 'Code and trained model', href: 'https://github.com/Water-Infrastructure-Laboratory/CPNN' },
    ],
    thumb: 'storm',
    highlight: true,
  },
  {
    authors: 'Li, H., & Shatarah, M.',
    year: '2024',
    title: 'Operator learning for urban water clarification hydrodynamics and particulate matter transport with physics-informed neural networks',
    venue: 'Water Research, 251, 121123',
    note: 'Combines physics-informed learning with neural operators to predict flow and particle transport across stormwater basins of different shapes and loads, using a 100,000-case CFD study.',
    links: [{ label: 'Paper', href: 'https://doi.org/10.1016/j.watres.2024.121123' }],
    thumb: 'basin',
  },
  {
    authors: 'Alnakeeb, M. A., Shatarah, M., Hamza, M. K., Abdel Salam, M. A., & Teamah, H. M.',
    year: '2024',
    title: 'The effect of fin geometry on the thermal performance of a conical shell double tube latent storage unit',
    venue: 'Journal of Energy Storage, 94, 112471',
    note: 'A parametric CFD study of paraffin melting in a finned, conical heat-storage unit, validated against an experiment before any design was compared.',
    links: [{ label: 'Project page', href: '/projects/heat-storage/' }, { label: 'Paper', href: 'https://doi.org/10.1016/j.est.2024.112471' }],
    thumb: 'heat',
  },
];

// Manuscripts under review: title, authors and one figure, until they are published.
export type Manuscript = { authors: string; title: string; thumb: 'clarNn' | 'clarCfd'; award?: string };
export const underReview: Manuscript[] = [
  {
    authors: 'Shatarah, M., Liu, K., & Li, H.',
    title: 'Multi-fidelity framework for activated sludge process modeling using neural operators',
    thumb: 'clarNn',
    award: 'Best Presentation Award, SE3 2026',
  },
  {
    authors: 'Shatarah, M., Liu, K., & Li, H.',
    title: 'Can a secondary clarifier be decoupled from the activated sludge process for design and optimization?',
    thumb: 'clarCfd',
  },
];

export const talks = [
  { authors: 'Shatarah, M., & Li, H.', year: '2026', title: 'A multi-fidelity operator-learning framework for activated sludge process modeling', where: 'SouthEastern Environmental Engineering Conference (SE3), Atlanta. Best Presentation Award.' },
  { authors: 'Shatarah, M., & Li, H.', year: '2025', title: 'Interactive water infrastructure design and optimization using an AI physics-informed web framework', where: 'ASCE EWRI Congress, Anchorage.' },
  { authors: 'Shatarah, M., & Li, H.', year: '2024', title: 'Efficient prediction of long-term stormwater infrastructure dynamics under changing climate', where: 'Poster, ISSE Research Conference, Knoxville.' },
  { authors: 'Shatarah, M., & Li, H.', year: '2024', title: 'Turbulent flow dynamics of stormwater infrastructure under unsteady loading conditions', where: 'ASCE EWRI Congress, Milwaukee.' },
  { authors: 'Li, H., & Shatarah, M.', year: '2024', title: 'Physics-informed operator learning for real-time high-resolution flood simulation', where: 'ASCE EWRI Congress, Milwaukee.' },
];

// Bold Mohamed's name in an author list.
export const markMe = (authors: string) => authors.replace('Shatarah, M.', '<b>Shatarah, M.</b>');
