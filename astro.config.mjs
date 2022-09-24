import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true
  },
  integrations: [compress(), react()],
  site: 'https://cmuaac.github.io',
  base: '/prompts',
});