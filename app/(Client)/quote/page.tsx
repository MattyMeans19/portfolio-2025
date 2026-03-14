'use client';
import { useEffect, useState } from "react";

export default function Quote(){
    const [quote, UpdateQuote] = useState({
        client: {
            name: "",
            tel: "",
            email: ""
        },
        engine: "Business Standard",
        addons: [],
        totalStartup: 0,
        totalMonthly: 0,
        completionETA: 0
    })

    return(
        <div className="grow hero-bg p-10 flex flex-col gap-15">
            <div className="bg-white w-[70vw] h-full place-self-center border-10 border-double rounded-3xl shadow-lg shadow-black/60 py-10 px-30
                grid grid-cols-3 gap-10 content-center">
                <h1 className="col-span-full text-4xl font-bold underline text-center">Contact Details</h1>
                <label htmlFor="clientName" className="text-2xl text-center">Enter Your Name (or business name):</label>
                <input type="text" id="clientName" required className="rounded-2xl inset-ring-1 shadow-sm shadow-slate-300 col-span-2 h-15 p-5 text-3xl"/>
                <label htmlFor="cleintTel" className="text-2xl text-center">Contact Number: xxx-xxx-xxxx</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="clientTel" required
                className="rounded-2xl inset-ring-1 shadow-sm shadow-slate-300 col-span-2 h-15 p-5 text-3xl"/>
                <label htmlFor="clientEmail" className="text-2xl text-center">Contact Email:</label>
                <input type="email" id="clientEmail" required className="rounded-2xl inset-ring-1 shadow-sm shadow-slate-300 col-span-2 h-15 p-5 text-3xl"/>
            </div>
        </div>
    )
}