import { defineConfig } from "drizzle-kit";

// This manually appends the SSL requirement if it's missing
const dbUrl = process.env.DATABASE_URL;
const sslUrl = dbUrl && !dbUrl.includes("sslmode") 
    ? `${dbUrl}${dbUrl.includes("?") ? "&" : "?"}sslmode=no-verify` 
    : dbUrl;

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  tablesFilter: ["quotes", "clients", "issues", "to_do", "add_ons", "portfolio"],
  dbCredentials: {
    url: sslUrl!, // Use the forced SSL URL
  },
});