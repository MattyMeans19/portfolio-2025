"use client";

import { CreateAddon } from "@/app/(Admin)/actions";
import { Addon } from "@/lib/definitions";
import { useState } from "react";

export default function AddonCreator(){
    const [newAddon, updateNewAddon] = useState({
        id: null,
        name: "",
        info: "",
        startUp: 0,
        monthly: 0,
        buildETA: 0,
        isPremium: false
    })

    async function SaveAddon(){
        if(newAddon.name && newAddon.info && newAddon.buildETA > 0){
         const request = await CreateAddon(newAddon);
         if(request.success){
            alert(request.message)
            window.location.reload()
         } else{
            alert(request.message);
         }
        } else{
            alert("Fill out all fields dummy!")
        }
        
    }

    return(
        <div className="grow col-start-2 border-5 border-double lg:px-15 flex flex-col lg:grid grid-cols-2 gap-5">
            <h1 className="text-4xl underline font-bold col-span-full text-center">Add-on Creator</h1>
            <input type="text" id="title" placeholder="Title" className="border h-fit" onChange={(e) => (updateNewAddon({...newAddon, name: e.target.value}))}/>
            <textarea id="info" placeholder="Description" maxLength={255} className=" col-start-2 border h-full" onChange={(e) => (updateNewAddon({...newAddon, info: e.target.value}))}/>
            <label htmlFor="startup">Start up cost (in cents)</label>
            <input type="number" id="startup" className="border h-fit" onChange={(e) => (updateNewAddon({...newAddon, startUp: e.target.valueAsNumber}))}/>
            <label htmlFor="monthly">Monthlycost (in cents)</label>
            <input type="number" id="monthly" className="border h-fit" onChange={(e) => (updateNewAddon({...newAddon, monthly: e.target.valueAsNumber}))}/>
            <label htmlFor="buildTime">Days to build</label>
            <input type="number" id="buildTime" className="border h-fit" onChange={(e) => (updateNewAddon({...newAddon, buildETA: e.target.valueAsNumber}))}/>
            <label htmlFor="isPremium">Premium only</label>
            <input type="checkbox" id="isPremium" className="border size-10" onChange={(e) => (updateNewAddon({...newAddon, isPremium: e.target.checked}))}/>
            <button className="p-5 col-span-full self-center bg-(--primary)" onClick={() => (SaveAddon())}>
                Create Add-on
            </button>
        </div>
    )
}