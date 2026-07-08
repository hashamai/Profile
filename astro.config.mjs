import { defineConfig } from "astro/config";

// Set `site` to the final deployed URL so OG tags resolve to absolute URLs.
// NOTE: if deploying to GitHub Pages as a *project* site
// `base: "/Project_page"` and prefix internal links with import.meta.env.BASE_URL.
// A user site (hashamai.github.io repo) or Vercel/Netlify needs no base.
export default defineConfig({
  site: "https://hashamai.github.io",
  base: "/Project_page",
});
