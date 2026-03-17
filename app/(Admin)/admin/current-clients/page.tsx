import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import { db } from "@/db";
import { Clients } from "@/db/schema";

export default async function CurrentClients(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
    const clients = await db.select().from(Clients)


    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="grow flex flex-col">
            <DBNav />
            {clients.map((client) => (
                <div key={client.id}>
                    <p>{client.name}</p>
                </div>
            ))}
        </div>
    )
}