// Shared facts for every page.

// The first sentence of the profile, shown under the name.
const INTRO =
  'Mechanical engineer completing a Ph.D. in civil engineering, combining computational fluid dynamics (CFD), scientific machine learning and high-performance computing (HPC) to support design and control decisions in engineering systems.';

export const site = {
  name: 'Mohamed Shatarah',
  // The headline under the name; the second line is teal.
  tagline: ['From physics to', 'better decisions.'] as const,
  intro: INTRO,
  description: INTRO,
  email: 'mohamedshatarah1@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mohamed-shatarah/',
    scholar: 'https://scholar.google.com/citations?user=9caUl1IAAAAJ',
    github: 'https://github.com/shatarahhh',
  },
  updated: 'October 2026',
};
