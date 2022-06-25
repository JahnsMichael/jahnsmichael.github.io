import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), vue()],
  site: "https:jahnsmichael.github.io/"
});