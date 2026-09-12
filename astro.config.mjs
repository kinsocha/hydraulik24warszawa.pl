// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const HIDDEN = [
  '/hydraulik-warszawa-mokotow',
  '/hydraulik-warszawa-wola',
  '/hydraulik-warszawa-ursynow',
  '/hydraulik-warszawa-bemowo',
  '/hydraulik-warszawa-wilanow',
  '/hydraulik-warszawa-praga-polnoc',
  '/hydraulik-warszawa-wawer',
  '/hydraulik-warszawa-bialoleka',
  '/hydraulik-warszawa-targowek',
  '/hydraulik-warszawa-bielany',
  '/hydraulik-warszawa-zoliborz',
  '/hydraulik-warszawa-ochota',
  '/hydraulik-warszawa-wlochy',
  '/hydraulik-warszawa-ursus',
  '/hydraulik-warszawa-rembertow',
  '/hydraulik-warszawa-wesola',
  '/hydraulik-piaseczno',
  '/hydraulik-pruszkow',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://hydraulik24warszawa.pl',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Podstrony dzielnicowe jeszcze nieodsłonięte (patrz PLAN-odslanianie-dzielnic.md).
      // Przy odsłanianiu dzielnicy usunąć jej slug z tej listy.
      filter: (page) => !HIDDEN.some((slug) => page.endsWith(slug)),
    }),
  ],
});