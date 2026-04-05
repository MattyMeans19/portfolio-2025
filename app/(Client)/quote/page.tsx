import QuoteBuilder from "@/components/quote-builder";
import { db } from "@/db";
import { AddOns, Clients } from "@/db/schema";
import Link from "next/link";

export default async function Quote(){
    const addons = await db.select().from(AddOns);
    const clientList = await db.select().from(Clients)

    return(
        <div className="grow flex flex-col gap-5 hero-bg">
            <QuoteBuilder addons={addons} clients={clientList.length}/>
            <h1 className="text-center text-3xl bg-white w-fit self-center rounded-t-3xl  border p-4">
                If you need something custom that doesn't fit one of these Templates, please feel free to
                <Link href={"/"} className="text-(--primary) text-shadow-md text-shadow-black mb-4"> Contact</Link> me!
            </h1>  
        </div>
        
    )
}