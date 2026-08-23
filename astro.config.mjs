// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hydraulik24warszawa.pl',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/hydraulik-warszawa-') &&
        !page.includes('/hydraulik-piaseczno') &&
        !page.includes('/hydraulik-pruszkow'),
    }),
  ],
});