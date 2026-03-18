import "dotenv/config";
import * as schema from "@/db/schema";
import { db } from "@/db";
import fs from "fs";
import path from "path";

async function backup() {
    console.log("🚀 Starting Database Backup...");
    try {
        const data = {
            quotes: await db.select().from(schema.Quotes),
            clients: await db.select().from(schema.Clients),
            issues: await db.select().from(schema.Issues),
            todos: await db.select().from(schema.ToDo),
            addons: await db.select().from(schema.AddOns),
            updatedAt: new Date().toISOString()
        };

        const filePath = path.join(process.cwd(), "db/seed-data.json");
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        
        console.log(`✅ Backup complete! ${data.clients.length} clients and ${data.addons.length} addons saved.`);
    } catch (error) {
        console.error("❌ Backup failed:", error);
    }
}

backup();