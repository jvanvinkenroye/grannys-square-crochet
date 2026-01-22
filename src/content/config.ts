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
  schema: z.object({
    title: z.string(),
    mood: z.string(),
    colors: z.string(),
  }),
});

const tutorials = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    level: z.string(),
    time: z.string(),
    focus: z.string(),
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
