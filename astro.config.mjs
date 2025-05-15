// @ts-check
import { defineConfig } from 'astro/config';
import staticAdapter from "@astrojs/static";

// https://astro.build/config
export default defineConfig({
    adapter: staticAdapter(),
    base: '/', 
    output: 'static'
  });
