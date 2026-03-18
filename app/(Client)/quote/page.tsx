import QuoteBuilder from "@/components/quote-builder";
import { db } from "@/db";
import { AddOns } from "@/db/schema";
import Link from "next/link";

export default async function Quote(){
    const addons = await db.select().from(AddOns);

    return(
        <div className="grow flex flex-col gap-5 hero-bg">
            <QuoteBuilder addons={addons}/>
            <h1 className="text-center text-3xl bg-white w-fit self-center rounded-t-3xl  border p-4">
                If you need something custom that doesn't fit one of these Templates, please feel free to
                <Link href={"/contact"} className="text-(--primary) text-shadow-md text-shadow-black mb-4"> Contact</Link> me!
            </h1>  
        </div>
        
    )
}