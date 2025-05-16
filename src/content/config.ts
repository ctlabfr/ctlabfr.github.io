import { defineCollection, z } from "astro:content";

// 📂 Collection : Code
const code = defineCollection({
  schema: z.object({
    // Mandatory fields
    title: z.string(),
    description: z.string(),
    createddate: z.date(),
    author: z.string(),
    // Optional fields
    updateddate: z.date().optional(),
    language: z.enum(["javascript", "html", "css"]).optional(),
    framework: z.enum(["astro"]).optional(),
    application: z.enum(["git"]).optional(),
    level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    documenttype: z.enum(["cheatsheet", "tutorial", "blog"]).optional(),  
    status: z.enum(["draft", "published"]).optional(),
  }),
});


export const collections = {
  code,
};
