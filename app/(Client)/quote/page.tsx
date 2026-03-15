import QuoteBuilder from "@/components/quote-builder";
import { db } from "@/db";
import { AddOns } from "@/db/schema";

export default async function Quote(){
    const addons = await db.select().from(AddOns);

    return(
        <QuoteBuilder addons={addons}/>
    )
}