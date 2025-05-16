// @ts-check
import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";

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
  ],
});
