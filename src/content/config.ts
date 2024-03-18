// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string().max(200),
      image: z.object({
        src: image(),
        //src: z.string(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Audrey Downey"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});

const portfolioCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      category: z.string(),
      tags: z.array(z.string()),
      stack: z.array(z.string()),
      featured: z.boolean(),
      role: z.string(),
      timeline: z.string(),
      links: z
        .object({
          demo: z.string(),
          github: z.string(),
          behance: z.string(),
        })
        .deepPartial(),
    }),
});

const pageCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .deepPartial(),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
