import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import { db } from "@/db";
import { Quotes } from "@/db/schema";
import QuoteCard from "@/components/quote-card";

export default async function PendingQuotes(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
    const quotes = await db.select().from(Quotes);

    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="grow flex flex-col">
            <DBNav />
            <QuoteCard quotes={quotes}/>
        </div>
    )
}