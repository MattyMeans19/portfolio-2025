import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import { db } from "@/db";
import { AddOns, Clients } from "@/db/schema";
import ClientCard from "@/components/client-card";
import { Client } from "@/lib/definitions";

export default async function CurrentClients(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
    const clients = await db.select().from(Clients)
    const addons = await db.select().from(AddOns)


    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="grow flex flex-col">
            <DBNav />
            <div className="flex flex-col lg:m-10 p-10 overflow-y-scroll max-h-full">
                {clients.map((client) => (
                    <ClientCard 
                        key={client.id}
                        client={client}
                        addons={addons}
                    />
                ))}
            </div>

        </div>
    )
}