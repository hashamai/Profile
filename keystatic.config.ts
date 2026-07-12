import { config, collection, fields } from "@keystatic/core";

// Local CMS. Run `npm run cms`, then open http://localhost:4321/keystatic
//
// Everything here writes plain markdown straight into src/content/, matching
// the Zod schemas in src/content.config.ts. Nothing about the production build
// changes — `npm run build` still produces the same static site.

export default config({
  storage: { kind: "local" },

  ui: {
    brand: { name: "InsiderByHasham" },
    navigation: {
      Content: ["posts", "projects"],
    },
  },

  collections: {
    // ── Blog ────────────────────────────────────────────────────────────
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "date"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
          slug: {
            label: "URL slug",
            description: "Becomes the post URL: /blog/<slug>",
          },
        }),
        date: fields.date({
          label: "Date",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        tags: fields.multiselect({
          label: "Tags",
          options: [
            { label: "AI", value: "AI" },
            { label: "TECH", value: "TECH" },
            { label: "MARKETS", value: "MARKETS" },
            { label: "RESEARCH", value: "RESEARCH" },
          ],
          defaultValue: ["AI"],
        }),
        pinned: fields.checkbox({
          label: "Pinned",
          description: "Shows a PINNED chip on the post.",
          defaultValue: false,
        }),
        description: fields.text({
          label: "Description",
          description:
            "Optional. Used for SEO and the excerpt on the home page. Leave blank to auto-derive it from your first sentence.",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
          // Writes a plain .md file, not .mdoc — keeps the existing collection working.
          extension: "md",
          options: {
            image: {
              // Uploads land next to the post and are referenced relatively, so
              // Astro's image pipeline optimises them and fixes the base path.
              directory: "src/content/blog/images",
              publicPath: "./images/",
            },
          },
        }),
      },
    }),

    // ── Projects ────────────────────────────────────────────────────────
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "status"],
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
          slug: {
            label: "URL slug",
            description: "Becomes the project URL: /projects/<slug>",
          },
        }),
        pitch: fields.text({
          label: "Pitch",
          description: "One line shown on the project card.",
          multiline: true,
          validation: { isRequired: true },
        }),
        stack: fields.array(
          fields.text({ label: "Technology" }),
          {
            label: "Stack",
            itemLabel: (props) => props.value || "Technology",
            validation: { length: { min: 1 } },
          },
        ),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Shipped", value: "SHIPPED" },
            { label: "Work in progress", value: "WIP" },
            { label: "Research", value: "RESEARCH" },
          ],
          defaultValue: "WIP",
        }),
        year: fields.integer({
          label: "Year",
          defaultValue: 2026,
          validation: { isRequired: true },
        }),
        role: fields.text({
          label: "Role",
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: "Order",
          description: "Lower numbers appear first.",
          defaultValue: 1,
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({ label: "Featured", defaultValue: false }),
        links: fields.object(
          {
            live: fields.text({ label: "Live URL" }),
            source: fields.text({ label: "Source URL" }),
          },
          { label: "Links" },
        ),
        screenshots: fields.array(
          fields.object({
            src: fields.image({
              label: "Screenshot",
              directory: "public/screenshots",
              publicPath: "/screenshots/",
              validation: { isRequired: true },
            }),
            alt: fields.text({
              label: "Alt text",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Screenshots",
            itemLabel: (props) => props.fields.alt.value || "Screenshot",
          },
        ),
        content: fields.markdoc({
          label: "Brief",
          extension: "md",
          options: {
            image: {
              directory: "public/screenshots",
              publicPath: "/screenshots/",
            },
          },
        }),
      },
    }),
  },
});
