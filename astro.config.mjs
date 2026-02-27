import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://daksh-dangi.github.io',
  base: '/effective-broccoli',
  integrations: [tailwind()],

  vite: {
    plugins: [tailwindcss()],
  },
});