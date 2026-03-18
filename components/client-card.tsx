'use client';

import { Addon } from "@/lib/definitions";

interface Convert {
    client: {
        id: number;
        name: string,
        phone: string;
        email: string;
        startUp: number;
        recurring: number;
        engine: 'Business-Standard' | 'Business-Premium' | 'Restaurant-Standard' | 'Restaurant-Premium';
        addOns: number[];
        clientSince: string;    
    }

    addons: Addon[]
    
}

export default function ClientCard({client, addons}: Convert){

    const selectedAddons = () =>{
        if(client.addOns.length > 0){
            let list = addons.filter(addon => client.addOns!.includes(addon.id!))
            return list   
        } else{
            return [{name: "No Addons", id: 0}]
        }
    }

    return(
        <div className="border bg-(--primary) p-5 gap-10 rounded-3xl grid grid-cols-2 lg:grid-cols-4 text-center">
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                     Client Name: <br/>
                </strong>{client.name}
            </p>
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                     Client Email: <br/>
                </strong>{client.email}
            </p>
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                     Client Phone#: <br/>
                </strong>{client.phone}
            </p>
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                    Engine: <br/>
                </strong>{client.engine}
            </p>
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                    Client since: <br/> 
                </strong>{client.clientSince}
            </p>
            <p className="lg:text-2xl">
                <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                    Monthly Recurring: <br/>
                </strong>${(client.recurring / 100).toFixed(2)}
            </p>
            <div className="flex flex-col gap-5">
                <p className="lg:text-2xl">
                    <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                        {client.startUp > 0 && <span>Pending</span>} Startup: <br/>
                    </strong>${(client.startUp / 100).toFixed(2)}
                </p>
                {client.startUp > 0 && 
                <button className="border w-fit px-12 self-center rounded-4xl bg-(--secondary) lg:text-2xl">
                    Funded
                </button>}
            </div>
            <div>
                <p className="lg:text-2xl">
                    <strong className="lg:text-3xl text-(--secondary) text-shadow-lg text-shadow-black">
                        Add-ons: <br/>
                    </strong>
                </p>
                <ul>
                    {selectedAddons().map((addon) =>(
                        <li key={addon.id} className="lg:text-2xl">
                            {addon.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="col-start-1 col-span-2 border w-fit px-12 place-self-center rounded-4xl bg-(--secondary) lg:text-2xl">
                Update Client
            </button>
            <button className="col-start-3 col-span-2 border border-black w-fit px-12 place-self-center rounded-4xl bg-red-500 lg:text-2xl text-white">
                Delete Client
            </button>
        </div>
    )
}