import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import { db } from "@/db";


export default async function Analytics(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;

    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="grow flex flex-col">
            <DBNav />
        </div>
    )
}