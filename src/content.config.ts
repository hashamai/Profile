import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const TAGS = ["AI", "TECH", "MARKETS", "RESEARCH"] as const;

// Files starting with "_" are ignored, so `_TEMPLATE.md` and any `_draft-*.md`
// stay out of the published site until you rename them.
const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(TAGS)).min(1),
    pinned: z.boolean().default(false),
    // Optional: if omitted, the profile page derives an excerpt from the body.
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    pitch: z.string(),
    stack: z.array(z.string()).min(1),
    status: z.enum(["SHIPPED", "WIP", "RESEARCH"]),
    year: z.number(),
    role: z.string(),
    order: z.number(),
    links: z
      .object({
        live: z.string().optional(),
        source: z.string().optional(),
      })
      .default({}),
    screenshots: z
      .array(z.object({ src: z.string(), alt: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

// Resources are YAML data files so they can be edited in the CMS. Each one links
// to either an uploaded PDF (`file`) or an external URL (`url`).
const resources = defineCollection({
  loader: glob({
    pattern: ["**/*.yaml", "!**/_*.yaml"],
    base: "./src/content/resources",
  }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["book", "guide", "repo", "tool"]),
    note: z.string(),
    order: z.number().default(1),
    file: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  }),
});

export const collections = { blog, projects, resources };
