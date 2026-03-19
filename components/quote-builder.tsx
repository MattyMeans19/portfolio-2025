'use client';
import { Addon, Quote } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { EngineDetails } from "@/lib/quote";
import { NewQuote } from "@/app/(Admin)/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

const formatPhoneNumber = (value: string) => {
    // Strip all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Apply the 000-000-0000 mask
    const char = { 3: '-', 6: '-' };
    let formatted = '';
    for (let i = 0; i < numbers.length && i < 10; i++) {
        formatted += (char[i as keyof typeof char] || '') + numbers[i];
    }
    return formatted;
};

export default function QuoteBuilder(props: { addons: Addon[] , clients: number}) {
    const [quote, UpdateQuote] = useState<Quote>({
        customer: "",
        customerTel: "",
        customerEmail: "",
        template: "Business-Standard",
        addOns: [],
        totalStartup: 49999,
        totalMonthly: 9999,
        completionETA: 7,
        createdAt: ""
    });

    const [engineDetails, updateEngineDetails] = useState({
        name: "", startupPrice: 0, monthlyPrice: 0, included: "", buildTime: 0
    });

    const [availableAddons, updateAddons] = useState<any[]>([]);
    const [message, updateMessage] = useState("")


    useEffect(() => {
        if (engineDetails.name != quote.template) {
            const engineInfo = EngineDetails.filter(engine => engine.name === quote.template);
            updateEngineDetails(engineInfo[0]);
            UpdateQuote({...quote, totalStartup: engineInfo[0].startupPrice, totalMonthly: engineInfo[0].monthlyPrice, completionETA: engineInfo[0].buildTime})
        }
        if (availableAddons.length === 0) {
            updateAddons(props.addons.filter(addon => !addon.isPremium));
        }
        if(quote.createdAt === ""){
            const todaysDate = new Date().toISOString();
            UpdateQuote({...quote, createdAt: todaysDate})
        }
    }, [quote.template, props.addons]); // Added dependency array for safety


    function refreshAddons(selection: string){
        if(selection.includes("Premium")){
            updateAddons(props.addons)          
        } else{
            const addons = props.addons.filter(addon => addon.isPremium === false);
            updateAddons(addons)
        }
    }

    function addOnClicked(addon: Addon){
        const currentAddons = quote.addOns
        if(!quote.addOns.includes(addon.id!)){
            currentAddons.push(addon.id!)
            UpdateQuote({...quote, addOns: currentAddons, totalStartup: (quote.totalStartup + addon.startUp), totalMonthly: (quote.totalMonthly + addon.monthly), completionETA: (quote.completionETA + addon.buildETA)})
        } else if(quote.addOns.includes(addon.id!)){
            const removedAddons = quote.addOns.filter(toRemove => toRemove != addon.id);
            UpdateQuote({...quote, addOns: removedAddons, totalStartup: (quote.totalStartup - addon.startUp), totalMonthly: (quote.totalMonthly - addon.monthly), completionETA: (quote.completionETA - addon.buildETA)}) 
        }
    }

    async function SubmitQuote(quote: Quote){
        if(quote.customer === "" || quote.customerEmail === "" || quote.customerTel === ""){
            alert("Please fill out all contact information!");
        } else{
            const request = await NewQuote(quote);
            if(request!.success){
                updateMessage(request!.message)
                redirect("/success")
            } else{
                updateMessage(request!.message)
            }
        }
    }

    

    return (
        <div className="grow p-4 mt-20 md:p-10 flex flex-col items-center gap-8">
            <div className="w-full px-40 flex flex-col gap-10">
                <Link href={"/"} className="text-primary">⬅ Back to Home</Link>
                <h1 className="text-4xl boldText-primary">Build Your Project Quote</h1>
                <p className="text-secondary">Select a base engine, choose your add-ons, and get an instant estimate.</p>    
            </div>
            
            {/* SECTION 1: CONTACT DETAILS */}
            <section className="w-full max-w-[80vw] rounded-3xl border border-slate-200 bg-(--secondary) p-8">
                <h2 className="text-3xl boldText-primary mb-6 text-center">Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="clientName" className="contact-label">Client / Business Name</label>
                        <input type="text" id="clientName" placeholder="John Doe" className="contact-input"
                            onChange={(e) => (UpdateQuote({...quote, customer: e.target.value}))}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="clientTel" className="contact-label">Phone Number</label>
                        <input type="tel" id="clientTel" placeholder="505-555-5555" maxLength={12} value={quote.customerTel}
                            className="contact-input"
                            onChange={(e) => {
                                const formatted = formatPhoneNumber(e.target.value);
                                UpdateQuote({...quote, customerTel: formatted})
                            }}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="clientEmail" className="contact-label">Email Address</label>
                        <input type="email" id="clientEmail" placeholder="matt@example.com" className="contact-input"
                            onChange={(e) => (UpdateQuote({...quote, customerEmail: e.target.value}))}/>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CONFIGURATOR */}
            <section className="w-full max-w-[80vw] grid grid-cols-1 lg:grid-cols-12 gap-6 h-fit">
                
                {/* Left: Engine Selection */}
                <div className="lg:col-span-7 bg-(--secondary) rounded-3xl border border-slate-200 p-8 flex flex-col gap-6">
                    <div>
                        <label htmlFor="engine" className="block text-2xl font-bold text-(--primary) text-shadow-md text-shadow-black mb-4">Base Engine</label>
                        <select 
                            id="engine" 
                            className="w-full text-xl p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl cursor-pointer hover:border-(--primary) transition-colors"
                            onChange={(e) => {
                                UpdateQuote({...quote, template: e.target.value as Quote['template']});
                                refreshAddons(e.target.value);
                            }}
                        >
                            <option value="Business-Standard">Business Standard</option>
                            <option value="Restaurant-Standard">Restaurant Standard</option>
                            <option value="Business-Premium">Business Premium</option>
                            <option value="Restaurant-Premium">Restaurant Premium</option>
                        </select>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border-l-8 border-(--secondary)">
                        <p className="text-lg leading-relaxed">
                            Included in this build: <br/>
                            <span className="font-bold text-(--secondary) text-xl">{engineDetails.included}</span>
                        </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-slate-400 font-medium">Starting Investment: 
                            {props.clients <= 4 && <p className="text-sm">(25% off for the first 3 clients) 
                                <br/>Normally <strong>${(quote.totalStartup / 100).toLocaleString()}</strong></p>}</span>
                        <span className="text-3xl font-black text-(--primary) text-shadow-md text-shadow-black">
                            {props.clients <= 2 ?
                                `$${((quote.totalStartup / 100) * 0.75).toLocaleString()} + tax`
                            :
                                `$${(quote.totalStartup / 100).toLocaleString()} + tax`
                            }
                            
                        </span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-slate-400 font-medium">Monthly Fees:</span>
                        <span className="text-3xl font-black text-(--primary) text-shadow-md text-shadow-black">
                            ${(quote.totalMonthly / 100).toLocaleString()} + tax
                        </span>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-slate-400 font-medium">Build Time:</span>
                        <span className="text-3xl font-black text-(--primary) text-shadow-md text-shadow-black">
                            {quote.completionETA} Days
                        </span>
                    </div>
                </div>

                {/* Right: Add-ons Scrollable List */}
                <div className="lg:col-span-5 bg-(--secondary) rounded-3xl border border-slate-200 shadow-xl flex flex-col overflow-hidden md:max-h-[70vh] xlg:max-h-[50vh]">
                    <div className="p-6 border-b border-slate-200">
                        <h3 className="text-xl text-(--primary) text-shadow-md text-shadow-black font-bold text-center">Available Add-Ons</h3>
                    </div>
                    
                    <div className="overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
                        {availableAddons.map((addon) => (
                            <button key={addon.id} className={`group text-left p-4 border-2 border-slate-100 rounded-2xl hover:border-(--primary) 
                                ${quote.addOns.includes(addon.id) && "bg-(--primary)"} transition-all shadow-sm`}
                                onClick={() => addOnClicked(addon)}>
                                <h4 className="font-bold text-lg text-(--primary) text-shadow-md text-shadow-black group-hover:underline">{addon.name}</h4>
                                <p className="text-md text-black mb-2 line-clamp-2">{addon.info}</p>
                                <div className="flex justify-between items-end">
                                    <div className="text-xs font-bold text-slate-400">
                                        +{addon.buildETA} Days
                                    </div>
                                    <div className="text-right">
                                        <p className="underline text-slate-400">Add-on Price</p>
                                        <p className="font-bold text-(--primary)">+${(addon.startUp / 100).toFixed(0)} at Start-Up</p>
                                        <p className="font-bold text-(--primary)">+${(addon.monthly / 100).toFixed(0)} additional per month</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {message && <p className="w-full text-center text-3xl text-black">{message}</p>}
            <button className="border border-(--tertiary) rounded-4xl bg-white shadow-lg shadow-slate-700 
                    text-5xl text-(--secondary) active:text-(--primary) text-shadow-md text-shadow-black p-10"
                    onClick={() => (SubmitQuote(quote))}>
                        Submit
            </button>
        </div>
    );
}