// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://granny-square-haekeln.com',
  integrations: [sitemap()],
  compress: {
    css: true,
    html: true,
    img: true,
    js: true,
    svg: true,
  },
});
