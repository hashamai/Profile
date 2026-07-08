import { defineConfig } from "astro/config";

// Deployed at https://hashamai.github.io/Profile/ — a GitHub Pages *project*
// site, so `base` must match the repo name (/Profile) exactly (case-sensitive).
// `site` is the domain, used for absolute OG/sitemap URLs.
// If you ever rename the repo to `hashamai.github.io` (a user site), drop the
// `base` line — it would then serve from the root.
export default defineConfig({
  site: "https://hashamai.github.io",
  base: "/Profile",
});
