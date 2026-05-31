import "dotenv/config";
import * as schema from "@/db/schema";
import { db } from "@/db";
import fs from "fs";
import path from "path";

async function backup() {
    console.log("🚀 Starting Database Backup...");
    try {
        const data = {
            portfolio: await db.select().from(schema.PortfolioItem),
            updatedAt: new Date().toISOString()
        };

        const filePath = path.join(process.cwd(), "db/seed-data.json");
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        
    } catch (error) {
        console.error("❌ Backup failed:", error);
    }
}

backup();