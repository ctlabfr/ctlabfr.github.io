import { defineCollection, z } from "astro:content";

// 📂 Collection : Code
const code = defineCollection({
  schema: z.object({
    // Mandatory fields
    title: z.string(),
    description: z.string(),
    createddate: z.date(),
    author: z.string(),
    status: z.enum(["draft", "published"]),
    // Optional fields
    updateddate: z.date().optional(),
    documenttype: z.enum(["cheatsheet", "tutorial", "blog"]).optional(),
    language: z.enum(["javascript", "html", "css"]).optional(),
    framework: z.enum(["astro"]).optional(),
    application: z.enum(["git"]).optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  }),
});


export const collections = {
  code,
};
