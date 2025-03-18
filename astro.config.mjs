// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  // adapter: netlify({
  //   imageCDN: false
  // })
});