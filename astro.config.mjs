import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true
  },
  integrations: [compress(), svelte()],
  site: 'https://cmuaac.github.io',
  base: '/prompts',
});