// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/",
  output: "static",
  integrations: [
    astroExpressiveCode({
      themes: ["dracula"],
      frames: {
        // Example: Hide the "Copy to clipboard" button
        showCopyToClipboardButton: true,
      },
    }),
    mdx(),
  ],
  // image: {
  //   service: passthroughImageService(),
  // },
  // Add more config options here if needed
});
