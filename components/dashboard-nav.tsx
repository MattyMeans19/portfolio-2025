'use client'

import { Logout } from "@/app/(Admin)/actions"

export default function DBNav(){
    return(
        <div className="flex flex-col items-center bg-(--primary) border-b-10 border-double pb-5 gap-10">
            <h1 className="text-5xl">Dashboard</h1>
            <div className="w-full flex flex-nowrap justify-around">
                <button className="bg-white text-2xl p-5 rounded-full border"
                    onClick={() => Logout()}>
                    Logout
                </button>
                <button className="lg:text-2xl border-2 p-2 rounded-2xl bg-white">Pending Quotes</button>
                <button className="lg:text-2xl border-2 p-2 rounded-2xl bg-white">Current Clients</button>
                <button className="lg:text-2xl border-2 p-2 rounded-2xl bg-white">Analytics</button>
            </div>
            
        </div>
    )
}