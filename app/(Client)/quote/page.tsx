'use client';
import { Engine } from "@/lib/definitions";
import { addons, EngineDetails } from "@/lib/quote";
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

    const [selectedEngine, setEngine] = useState("Business Standard");
    const [engineInfo, updateEndingInfo] = useState(
        EngineDetails.filter(engine => engine.name.includes(selectedEngine))
    )

    useEffect(() =>{
        if(selectedEngine != quote.engine){
            setEngine(quote.engine)
        }
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
            <div className="grow bg-white border-10 border-double rounded-3xl shadow-lg shadow-black/60 py-10 px-30
                    grid grid-cols-4 gap-5">
                <h1 className="text-4xl font-bold underline text-center col-span-full h-fit mb-10">Choose Your Build</h1>
                <label htmlFor="template" className="col-start-1 text-3xl text-center">Base Engine:</label>
                <select id="template" className="border h-fit p-2 text-lg text-center w-fit" defaultValue="Business_Standard">
                    <option value="Business_Standard">Business Standard</option>
                    <option value="Restaurant_Standard">Restaurant Standard</option>
                    <option value="Business_Premium">Business Premium</option>
                    <option value="Restaurant_Premium">Restaurant Premium</option>
                </select>
                <div className="col-start-1 row-start-2">
                </div>
                <div className="col-start-3 row-span-1 flex flex-col gap-5 col-span-2 p-10 overflow-y-scroll">
                    <h1 className="text-4xl font-bold underline text-center col-span-full h-fit">Add-ons</h1>
                    {addons.map((addon, index) =>(
                        <div key={index} className={`border-5 border-(--primary) bg-slate-100 rounded-2xl p-2 text-center grid grid-cols-2 gap-2`}>
                            <h2 className="font-bold text-2xl underline col-span-full">{addon.title}</h2>
                            <p className="text-start text-lg col-span-full border p-5 rounded-2xl">{addon.info}</p>
                            <p className="col-start-1"><strong>Build Time:</strong> {addon.timeToBuild} day(s)</p>
                            <p className="col-start-1"><strong>Additional Startup fee: </strong> ${(addon.startupPrice / 100).toFixed(2)}</p>
                            <p className="col-start-1"><strong>Additional Monthly fee: </strong> ${(addon.monthlyPrice / 100).toFixed(2)}</p>
                            <input type="checkbox" id={addon.title} className="size-5 col-start-2 place-self-end"/>
                        </div>
                    ))}    
                </div>
                
                
            </div>
        </div>
    )
}