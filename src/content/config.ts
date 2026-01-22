import { defineCollection, z } from 'astro:content';

const highlights = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    level: z.string(),
    time: z.string(),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    title: z.string(),
    mood: z.string(),
    colors: z.string(),
    image: image(),
  }),
});

const tutorials = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    level: z.string(),
    time: z.string(),
    focus: z.string(),
    image: image().optional(),
  }),
});

const glossary = defineCollection({
  type: 'data',
  schema: z.object({
    term: z.string(),
    meaning: z.string(),
  }),
});

export const collections = {
  highlights,
  gallery,
  tutorials,
  glossary,
};
