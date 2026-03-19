import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const globalForDb = global as unknown as { pool: Pool };

const isProduction = process.env.NODE_ENV === "production";

console.log("DEBUG: NODE_ENV is", process.env.NODE_ENV);

const pool = globalForDb.pool || new Pool({
  connectionString: process.env.DATABASE_URL,
  // Completely omit the ssl key if not in production
  ...(isProduction && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
});

if (!isProduction) globalForDb.pool = pool;

export const db = drizzle(pool, { schema });