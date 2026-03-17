import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import { db } from "@/db";
import { AddOns, Quotes } from "@/db/schema";
import QuoteCard from "@/components/quote-card";
import { PendingQuote } from "@/lib/definitions";

export default async function PendingQuotes(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
    const quotes = await db.select().from(Quotes);
    const addons = await db.select().from(AddOns);

    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="grow flex flex-col">
            <DBNav />
            <QuoteCard quotes={quotes} addons={addons}/>
        </div>
    )
}