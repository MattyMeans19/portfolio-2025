import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // Only use SSL in production
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  },
});