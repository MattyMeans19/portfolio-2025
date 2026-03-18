
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { redirect } from "next/navigation";
import DBNav from "@/components/dashboard-nav";
import AddonCreator from "@/components/addon-creator";
import ToDoList from "@/components/todo";
import { db } from "@/db";
import { AddOns, Issues, Quotes, ToDo } from "@/db/schema";
import { Addon, ToDoItem } from "@/lib/definitions";
import AddonList from "@/components/addon-list";

export default async function DashBoard(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    const currentUser = sessionInfo?.username as string;
    const availableAddons = await db.select().from(AddOns) as Addon[];
    const toDoItems = await db.select().from(ToDo) as ToDoItem[];
    const quotes = await db.select().from(Quotes);
    const issues = await db.select().from(Issues)

    if(!currentUser){
        redirect("/admin")
    }

    return(
        <div className="flex flex-col w-full h-full">
            <DBNav />
            <div className="grow p-5 lg:p-20 flex flex-col lg:grid grid-cols-2 gap-15">
                <ToDoList list={toDoItems}/>
                <AddonList list={availableAddons}/>
                <div className="border-5 col-start-1 col-span-full h-fit row-start-3 border-double text-5xl flex flex-col gap-10">
                   <p className="text-center content-center">
                        <strong className="text-(--secondary)">{quotes.length} </strong> 
                        Quote(s) are waiting for your review.
                    </p>
                   <p className="text-center"><strong className={`${issues.length > 0 && 'text-red-500'} text-(--primary)`}>{issues.length} </strong> 
                        issues reported this month.
                   </p>
                </div>
                <AddonCreator />
            </div>
        </div>
        
    )
}