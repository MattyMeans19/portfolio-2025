'use client';

import { DeleteAddon } from "@/app/(Admin)/actions";
import { Addon } from "@/lib/definitions";

interface AddonList{
    list: Addon[]
}

export default function AddonList(availableAddons: AddonList){

    async function handleDelete(id: number){
        const request = await DeleteAddon(id);

        if(request.success){
            alert(request.message)
            window.location.reload()
        } else{
           alert(request.message) 
        }
    }

    return(
        <div className="row-start-2 col-span-full grid grid-cols-2 lg:grid-cols-4 h-[40vh] lg:h-fit gap-10 overflow-y-scroll">
            <h1 className="col-span-full text-center text-4xl underline font-bold">Available Addons</h1>
            {availableAddons.list.map((addon) => (
                <div key={addon.id} className="text-xl text-center border border-(--primary) rounded-2xl bg-slate-200">
                    <p className="underline font-bold">{addon.name}</p>
                    <p>Start-up: ${(addon.startUp / 100).toFixed(2)} </p>
                    <p>Monthly: ${(addon.monthly / 100).toFixed(2)}</p>
                    <p>Premium Only: {addon.isPremium ? "Yes" : "No"}</p>
                    <button className="cursor-pointer" onClick={() => (handleDelete(addon.id!))}>🗑️</button>
                </div>
            ))}
            {availableAddons.list.length === 0 && <p className="text-3xl text-center col-span-full">No available add-ons!</p>}                   
        </div>
    )
}