import { defineConfig } from "astro/config";

// Set `site` to the final deployed URL so OG tags resolve to absolute URLs.
// NOTE: if deploying to GitHub Pages as a *project* site
// (https://hashamrashid55-cmd.github.io/Project_page), also set
// `base: "/Project_page"` and prefix internal links with import.meta.env.BASE_URL.
// A user site (hashamrashid55-cmd.github.io repo) or Vercel/Netlify needs no base.
export default defineConfig({
  site: "https://hashamrashid55-cmd.github.io",
});
