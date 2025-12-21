import {
    z,
    defineCollection,
} from "astro:content";

import { glob } from "astro/loaders";

const recipes = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/recipes" }),
    schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        time: z.number().optional(),
        ingredients: z.array(z.string()),
        tags: z.array(z.string()),
        image: z.string().optional(),
        portions: z.number().optional(),
        portion_type: z.string().optional(),
        category: z.string()
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { recipes };