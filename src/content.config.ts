import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // Optional override for <title>, og:title, and twitter:title.
    metaTitle: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { pages };
