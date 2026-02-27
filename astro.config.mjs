import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tailwindcss from '@tailwindcss/postcss';

export default defineConfig({
  site: 'https://daksh-dangi.github.io',
  base: '/effective-broccoli',
  integrations: [tailwind()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
});