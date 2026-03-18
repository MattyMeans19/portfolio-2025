import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // Add this to match your index.ts logic
    ssl: {
      rejectUnauthorized: false,
    },
  },
});