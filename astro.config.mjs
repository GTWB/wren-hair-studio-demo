// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Placeholder demo domain — used only to generate absolute canonical/OG URLs.
  // Replace with the real Netlify/custom domain when this demo is deployed.
  site: 'https://wren-hair-studio-demo.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});