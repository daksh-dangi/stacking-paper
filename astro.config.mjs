import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daksh-dangi.github.io',
  base: '/stacking-paper',
  integrations: [tailwind()],
});