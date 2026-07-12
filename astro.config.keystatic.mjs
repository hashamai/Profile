import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import keystatic from "@keystatic/astro";

// ── CMS-only config. Used by `npm run cms`, never by `npm run build`. ──
//
// Keystatic's admin UI needs a server route to write files, which means an SSR
// adapter. The production site is a *static* GitHub Pages build, so that adapter
// must not leak into it — hence this separate config.
//
// `base` is intentionally omitted so the CMS sits at /keystatic rather than
// /Profile/keystatic while you're editing locally.
export default defineConfig({
  site: "https://hashamai.github.io",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), keystatic()],
});
