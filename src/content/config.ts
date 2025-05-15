import { defineCollection, z } from "astro:content";

// 📂 Collection : Code
const code = defineCollection({
  schema: z.object({
    // Mandatory fields
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    // Optional fields
    proglang: z.enum(["javascript", "html", "css"]).optional(),
    framework: z.enum(["astro"]).optional(),
    tools: z.enum(["git"]).optional(),
    draft: z.boolean().optional(),
  }),
});

// 📂 Collection : Sysadmin
const sysadmin = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    os: z.enum(["Rockylinux 8", "Rockylinux 9", "Windows 11"]).optional(),
    application: z.enum(["Zabbix","Grafana","Kubernetes","Docker","Ansible"]).optional(),  
    author: z.string(),
    draft: z.boolean().optional(),
  }),
});


export const collections = {
  code,
  sysadmin,
};
