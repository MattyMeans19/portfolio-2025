import * as schema from "@/db/schema";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import fs from "fs";
import path from "path";

async function seed() {
    const filePath = path.join(process.cwd(), "db/seed-data.json");
    if (!fs.existsSync(filePath)) return console.error("No backup file found.");

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    try {
        console.log("🌱 Seeding database...");

        await db.transaction(async (tx) => {
            // Insert in order (careful of foreign keys if you add them later)
            if (data.portfolio.length) await tx.insert(schema.PortfolioItem).values(data.portfolio)

            // FIX SERIAL SEQUENCES
            // This ensures the next "ID" generated is higher than the ones we just seeded
            const tables = [
                { name: 'portfolio', id: 'project_id'}
            ];

            for (const table of tables) {
                await tx.execute(sql.raw(`SELECT setval(pg_get_serial_sequence('${table.name}', '${table.id}'), coalesce(max(${table.id}), 1)) FROM ${table.name};`));
            }
        });

        console.log("✅ Database seeded and sequences reset!");
    } catch (error) {
        console.error("❌ Seeding failed:", error);
    }
}

seed();