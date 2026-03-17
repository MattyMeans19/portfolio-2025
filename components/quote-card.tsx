'use client';

import { DeleteQuote } from "@/app/(Admin)/actions";
import { Addon, PendingQuote } from "@/lib/definitions";

interface Card {
    quotes: PendingQuote[],
    addons: Addon[]
}

export default function QuoteCard(props: Card){

    async function Clicked(approved: boolean, quoteData: PendingQuote){
        const request = await DeleteQuote(approved, quoteData);
        if(request.success){
            alert(request.message);
            window.location.reload();
        } else{
            alert(request.message)
        }
    }

    const selectedAddons = (ids: number[] | null) =>{
        if(ids != null){
            let list = props.addons.filter(addon => ids!.includes(addon.id!))
            return list   
        } else{
            return [{name: "No Addons", id: 0}]
        }
    }

    return(
        <div className="grow flex flex-col">
            <div className="p-5 lg:p-30 flex flex-col gap-15">
                {props.quotes.map((quote) => (
                    <div key={quote.id} className="w-full border border-(--primary) bg-slate-100 p-5 rounded-2xl grid lg:grid-cols-3 gap-5">
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Client name:</strong>
                            <br/> 
                            {quote.customer}
                        </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Client Tel#:</strong>
                            <br/> 
                            {quote.customerTel}
                        </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Client Email:</strong>
                            <br/> 
                            {quote.customerEmail}
                        </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Proposed Startup:</strong>
                            <br/>
                            ${(quote.totalStartup / 100).toFixed(2)}
                         </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Proposed Monthly:</strong>
                            <br/>
                            ${(quote.totalMonthly / 100).toFixed(2)}
                         </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Created At (yyy-mm-dd):</strong>
                            <br/>
                            {quote.createdAt}
                         </p>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Engine:</strong>
                            <br/>
                            {quote.template}
                         </p>
                        <span className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Addons:</strong>
                            <br/>
                            <ul>
                                 {selectedAddons(quote.addOns).map((addon) =>(
                                    <li key={addon.id}>{addon.name}</li>
                                 ))}
                            </ul>
                         </span>
                        <p className="text-3xl">
                            <strong className="text-3xl text-(--primary) text-shadow-md text-shadow-black">Compleation ETA:</strong>
                            <br/>
                            {quote.completionETA} days
                         </p>
                         <div className="mt-10 col-span-full w-full flex flex-nowrap justify-around">
                            <button className="text-2xl p-5 rounded-4xl shadow-md shadow-slate-800 bg-(--secondary)"
                                onClick={() => (Clicked(false, quote))}
                            >
                                Reject
                            </button>
                            <button className="text-2xl p-5 rounded-4xl shadow-md shadow-slate-800 bg-(--primary)"
                                onClick={() => (Clicked(true, quote))}
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                ))}              
            </div>

            {props.quotes.length === 0 && <p className="text-7xl text-(--primary) text-shadow-md text-shadow-black w-full text-center">No Quotes at this time!</p>}
        </div>
    )
}