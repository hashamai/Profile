import { config, collection, fields, singleton } from "@keystatic/core";

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
      Content: ["posts", "projects", "resources"],
      Profile: ["info", "about", "education"],
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

    // ── Resources ───────────────────────────────────────────────────────
    resources: collection({
      label: "Resources",
      slugField: "title",
      path: "src/content/resources/*",
      // Data-only entries (no markdown body) — written as .yaml files.
      format: { data: "yaml" },
      columns: ["title", "kind"],
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        kind: fields.select({
          label: "Kind",
          description: "Shown as the mono label next to the title.",
          options: [
            { label: "book", value: "book" },
            { label: "guide", value: "guide" },
            { label: "repo", value: "repo" },
            { label: "tool", value: "tool" },
          ],
          defaultValue: "book",
        }),
        note: fields.text({
          label: "Note",
          description: "One line describing why it's worth reading.",
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: "Order",
          description: "Lower numbers appear first.",
          defaultValue: 1,
          validation: { isRequired: true },
        }),
        // Uploads land next to the YAML, under src/content/resources/. Keystatic
        // namespaces them by entry slug, so the stored value is resolved by
        // FILENAME at build time (see src/lib/resources.ts) — the exact folder
        // doesn't matter.
        file: fields.file({
          label: "PDF",
          description:
            "Upload a PDF. Leave empty if you're linking somewhere external instead.",
          directory: "src/content/resources",
          publicPath: "",
        }),
        url: fields.text({
          label: "External URL",
          description:
            "Used only when no PDF is uploaded — e.g. a GitHub repo or a tool.",
        }),
      },
    }),
  },

  // ── Profile singletons (the hero, about, and education sections) ────────
  singletons: {
    info: singleton({
      label: "Info",
      path: "src/content/site/profile",
      format: { data: "json" },
      schema: {
        name: fields.text({
          label: "Name",
          description: "Shown as the big heading in the hero.",
          validation: { isRequired: true },
        }),
        logo: fields.text({
          label: "Logo text",
          description: "Appears in the top bar after the ~/ .",
          validation: { isRequired: true },
        }),
        tagline: fields.text({
          label: "Tagline",
          description: "One line under your name in the hero.",
          multiline: true,
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "SEO description",
          description: "Used for search engines and link previews.",
          multiline: true,
          validation: { isRequired: true },
        }),
        contactBlurb: fields.text({
          label: "Contact blurb",
          description: "The line above your social pills.",
          multiline: true,
          validation: { isRequired: true },
        }),
        github: fields.text({ label: "GitHub URL" }),
        linkedin: fields.text({ label: "LinkedIn URL" }),
        x: fields.text({ label: "X URL" }),
        email: fields.text({
          label: "Email",
          description: "Include the mailto: prefix.",
        }),
        rss: fields.text({ label: "RSS URL" }),
      },
    }),

    about: singleton({
      label: "About",
      path: "src/content/site/about",
      format: { data: "json" },
      schema: {
        paragraphs: fields.array(
          fields.text({ label: "Paragraph", multiline: true }),
          {
            label: "Paragraphs",
            itemLabel: (props) =>
              props.value.slice(0, 50) || "Paragraph",
          },
        ),
      },
    }),

    education: singleton({
      label: "Education",
      path: "src/content/site/education",
      format: { data: "json" },
      schema: {
        entries: fields.array(
          fields.object({
            degree: fields.text({
              label: "Degree",
              validation: { isRequired: true },
            }),
            institution: fields.text({
              label: "Institution",
              validation: { isRequired: true },
            }),
            years: fields.text({ label: "Years" }),
            result: fields.text({ label: "Result" }),
          }),
          {
            label: "Entries",
            itemLabel: (props) => props.fields.degree.value || "Entry",
          },
        ),
        certs: fields.text({
          label: "Certifications",
          description: "Leave blank to hide the certs line.",
        }),
      },
    }),
  },
});
