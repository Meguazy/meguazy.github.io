import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://meguazy.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'fr', 'de', 'es', 'pl'],
    routing: { prefixDefaultLocale: true },
  },
});
