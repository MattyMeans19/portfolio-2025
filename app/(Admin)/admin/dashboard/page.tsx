
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";

export default async function DashBoard(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
        console.log(currentUser)

    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="flex flex-col w-full h-full">
            <DBNav />
            <div className="grow p-20 flex flex-col lg:grid grid-cols-2 gap-5">
                <p className="text-center text-5xl"> <strong className="text-(--secondary)">#</strong> Quotes are waiting for your review.</p>
                <div className="row-span-2 flex flex-col gap-5 border-5 border-double px-15">
                    <h1 className="text-center text-6xl underline">To Do</h1>
                    <ul className="list-disc text-3xl">
                        <li>
                            <p>Nothing for now</p>
                        </li>
                    </ul>
                </div>
                <div className="border-5 border-double text-3xl">
                   <h1 className="text-center"># of issues reported this month</h1>
                </div>
            </div>
        </div>
        
    )
}