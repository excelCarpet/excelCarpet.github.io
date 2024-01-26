import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: 'https://excelcarpet.github.io',
  integrations: [tailwind(), compress(),]
  //base: '/my-repo',
});
