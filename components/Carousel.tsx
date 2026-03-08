'use client'

import Image from "next/image";
import { useState } from "react"
import ShopifyLogo from "@/public/logos/shopify.png"
import WPLogo from "@/public/logos/WordPress.png"
import MyLogo from "@/public/BrandTag.png"
import PerformanceRace from "./performance";

const SLIDES = [
  {
    id: 1,
    title: "The Question",
    text: "With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?",
    type: "comparison"
  },
  {
    id: 2,
    title: "Ownership",
    text: "Stop paying 'digital rent.' When I build your app, you own the code and the data—no monthly subscription fees or platform lock-in.",
    visual: "🏠" 
  },
  {
    id: 3,
    title: "Performance",
    text: "Speed is a feature. Custom Next.js apps load instantly and rank higher on Google, while bloated templates drag down your conversion rates.",
    visual: <PerformanceRace />
  },
  {
    id: 4,
    title: "Scalability",
    text: "Don't bend your business to fit a template. I build custom features—like unique inventory systems—that standard plugins can't handle.",
    visual: "🛠️"
  },
  {
    id: 5,
    title: "Security",
    text: "Generic platforms are frequent targets for exploits. A custom architecture minimizes your attack surface and keeps customer data locked down.",
    visual: "🛡️"
  },
  {
    id: 6,
    title: "Long-Term ROI",
    text: "Invest in a tool built specifically for your workflow. A one-time custom build eliminates 'App Store' bloat and scales as you grow.",
    visual: "📈"
  },
  {
    id: 7,
    title: "Startup Costs",
    text: "Getting started shouldn't be a guessing game. Here is how my one-time build investment compares to the 'hidden' costs of other platforms.",
    type: "startup_costs"
  },
  {
    id: 8,
    title: "Ongoing Maintenance",
    text: "While DIY platforms charge monthly for upkeep and plugins, my custom-built apps are designed for zero-maintenance operation.",
    type: "maintenance"
  },
  {
    id: 9,
    title: "Feature Comparison",
    text: "Whether you need a streamlined store or a full-scale engine with custom rewards, I have a tier to fit your business.",
    type: "features"
  },
  { id: 10, 
    title: "Modular Growth", 
    text: "Every store is modular. You start with the engine you need today, and we 'plug in' new capabilities as you grow.", 
    type: "modular" 
  }
];

export default function Carousel() {
  const [item, setItem] = useState(1);

  const itemIncrease = () => setItem(prev => (prev < SLIDES.length ? prev + 1 : prev));
  const itemDecrease = () => setItem(prev => (prev > 1 ? prev - 1 : prev));

  const currentSlide = SLIDES.find(s => s.id === item);

  return (
    <div className="grow h-full lg:h-[60vh] relative bg-white w-[85vw] m-7.5 rounded-2xl border flex flex-col overflow-hidden shadow-sm">
      
      {/* Main Content Area */}
      <div className="grow p-5 w-full flex flex-col items-center justify-center gap-10">
        <h2 className="text-2xl md:text-3xl text-center w-full text-pretty text-gray-700 font-medium max-w-4xl border-b-8 border-double border-slate-100 pb-6">
          {currentSlide?.text}
        </h2>

        <div className="flex-1 w-full flex items-center justify-center">
          {currentSlide?.type === "comparison" ? (
            <div className="grid grid-cols-3 w-full max-w-2xl items-center gap-5 md:gap-10">
              <div className="flex flex-col gap-6 justify-center items-end col-start-1">
                <Image src={ShopifyLogo} alt="Shopify" width={100} height={100} className="w-12 h-12 lg:w-20 lg:h-20 object-contain" />
                <Image src={WPLogo} alt="WordPress" width={100} height={100} className="w-12 h-12 lg:w-20 lg:h-20 object-contain" />
              </div>
              <p className="col-start-2 font-black text-center text-4xl text-red-600 italic">VS</p>
              <div className="col-start-3 flex justify-start">
                <Image 
                  src={MyLogo} 
                  alt="My Brand" 
                  width={300} 
                  height={300} 
                  className="w-16 h-16 lg:w-32 lg:h-32 rounded-full border-4 border-green-500 shadow-lg" 
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500 h-full w-full">
               <p className="text-2xl font-bold text-slate-600 underline uppercase tracking-[0.2em] text-center">
                {currentSlide?.title}
               </p>
               <span className="text-8xl lg:text-9xl drop-shadow-md h-full w-full">
                {currentSlide?.visual}
               </span>
            </div>
          )}
        </div>
      </div>

    {/* Slide 7: Startup Costs (Detailed Breakdown) */}
    {currentSlide?.type === "startup_costs" && (
    <div className="w-full h-full flex flex-col justify-center px-6 lg:px-12 animate-in fade-in duration-500">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Competitor: The "Hidden" Cost */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="text-base font-bold text-slate-500 mb-4 uppercase">Shopify / WP</h4>
            <div className="text-3xl font-black text-red-500 mb-6">$950 - $2,500+</div>
            
            <div className="space-y-4 text-xs text-slate-600">
            <div className="flex justify-between border-b border-slate-200 pb-2 text-lg">
                <span>Theme & Plugins</span> <span>$350+</span>
            </div>
            <div className="flex justify-between border-b text-lg border-slate-200 pb-2">
                <span>Hidden Fee Examples</span> 
            </div>
            <ul className="text-xl text-slate-400 space-y-1 list-disc pl-4">
                <li>2% Extra Transaction Fees</li>
                <li>Premium App Subscriptions</li>
                <li>Backup/Security Upgrades</li>
                <li>Theme Licensing</li>
            </ul>
            </div>
        </div>

        {/* Standard Tier */}
        <div className="bg-white p-6 rounded-2xl border-2 border-slate-300 flex flex-col justify-between">
            <h4 className="text-base font-bold text-slate-700 mb-4">My Standard Tier</h4>
            <div className="text-3xl font-black text-slate-800">$499</div>
            <p className="text-md text-slate-500 mt-2 font-medium">Flat Fee (Setup Included)</p>
            <p className="text-sm text-slate-400 mt-6 italic">No plugins needed. No theme taxes. No hidden setup labor.</p>
        </div>

        {/* Premium Tier */}
        <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-500 flex flex-col justify-between">
            <h4 className="text-base font-bold text-green-700 mb-4">My Premium Tier</h4>
            <div className="text-3xl font-black text-green-700">$999</div>
            <p className="text-md text-green-800 mt-2 font-medium">Flat Fee (Transactional)</p>
            <p className="text-sm text-green-700 mt-6 italic tracking-wide">Includes Stripe Setup & Order Management</p>
            <p className="text-sm text-red-500">*Integration of a Payment Service Provider other than <strong className="text-green-700">Stripe</strong> will incur an additional fee up to $500*</p>
        </div>
        </div>
    </div>
    )}

    {/* Slide 8: Monthly Managed Costs */}
    {currentSlide?.type === "maintenance" && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full place-items-center px-5 animate-in fade-in">
        
        {/* Standard Comparison */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full h-full">
        <h4 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-4">Standard vs. DIY</h4>
        <div className="space-y-2 text-lg text-slate-600">
            <div className="flex justify-between"><span>DIY Platform + Apps</span> <span>$150/mo</span></div>
            <div className="flex justify-between border-b pb-2 mb-2"><span>DIY Maintenance Effort</span> <span>$50/mo (Value)</span></div>
            <div className="flex justify-between font-bold text-slate-800"><span>DIY Total</span> <span>$200/mo</span></div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between font-bold text-green-700">
            <span>MyManaged Fee</span> <span>$99/mo</span>
            </div>
        </div>
        </div>

        {/* Premium Comparison */}
        <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-500 shadow-md w-full h-full">
        <h4 className="text-lg font-bold text-green-700 uppercase tracking-widest mb-4">Premium vs. DIY</h4>
        <div className="space-y-2 text-lg text-green-900">
            <div className="flex justify-between"><span>DIY Platform + Pro Apps</span> <span>$350+/mo</span></div>
            <div className="flex justify-between border-b border-green-200 pb-2 mb-2"><span>DIY Maintenance Effort</span> <span>$100/mo (Value)</span></div>
            <div className="flex justify-between font-bold text-green-900"><span>DIY Total</span> <span>$450/mo</span></div>
            <div className="mt-4 pt-4 border-t border-green-200 flex justify-between font-bold text-green-900">
            <span>My Managed Fee</span> <span>$299/mo</span>
            </div>
        </div>
        </div>
    </div>
    )}

    {/* Slide 9: Standard vs. Premium Tiers */}
    {currentSlide?.type === "features" && (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 h-full">
        
        {/* Standard Tier */}
        <div className="border border-slate-200 p-8 rounded-2xl bg-white shadow-sm flex flex-col h-full">
        <h4 className="text-xl font-bold text-slate-700 mb-2">Standard Tier</h4>
        <p className="text-md text-slate-500 mb-6">Designed for digital presence & internal control.</p>
        <ul className="text-sm space-y-4 text-slate-600 grow">
            <li className="flex gap-3 text-lg"><span>✅</span> Home, Products/Menu, & Contact Pages</li>
            <li className="flex gap-3 text-lg"><span>✅</span> Admin Portal: User & Inventory Mgmt</li>
            <li className="flex gap-3 text-lg"><span>✅</span> Live Landing Page Announcements</li>
            <li className="flex gap-3 text-lg"><span>✅</span> 1 Admin Included (Scalable at $1/mo per user, 5-user blocks)</li>
        </ul>
        </div>

        {/* Premium Tier */}
        <div className="border-2 border-green-500 p-8 rounded-2xl bg-green-50 shadow-md relative flex flex-col h-full">
        {/* <div className="absolute top-4 right-6 bg-green-500 text-white text-sm font-black px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div> */}
        <h4 className="text-xl font-bold text-green-900 mb-2">Premium Tier</h4>
        <p className="text-md text-green-700/80 mb-6">Everything in Standard, plus full transactional power.</p>
        <ul className="text-sm space-y-4 text-green-900 grow">
            <li className="flex gap-3 font-semibold text-lg"><span>🚀</span> Includes all Standard features</li>
            <li className="flex gap-3 font-semibold text-lg"><span>🚀</span> 5 Users Included to start</li>
            <li className="flex gap-3 font-semibold text-lg"><span>🚀</span> Stripe Online Ordering (Pickup)</li>
            <li className="flex gap-3 font-semibold text-lg"><span>🚀</span> Integrated Order Management System</li>
        </ul>
        </div>
    </div>
    )}

    {/* Slide 10: The Modular Advantage */}
    {currentSlide?.type === "modular" && (
    <div className="w-full h-full text-center animate-in fade-in flex flex-col items-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Business, Your Rules</h3>
        <p className="text-slate-600 mb-10 px-4 text-lg">
        Every store I build is a modular engine. You start with exactly what you need today, and we "plug in" new capabilities—like loyalty programs or delivery integration—without ever needing to rebuild your store.
        </p>
        
        <p className="text-3xl underline text-green-700 mb-5">Add-on Examples:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
        {["Rewards", "Delivery", "Analytics", "API"].map((item) => (
            <div key={item} className="bg-slate-100 p-6 rounded-2xl border border-slate-200 font-black text-slate-700 text-sm lg:text-base hover:border-green-500 hover:bg-green-50 transition-colors">
            +{item}
            </div>
        ))}
        </div>
        
        <p className="mt-10 text-md text-slate-400 italic">
            Add functionality with no hassle as your business requirements evolve.
        </p>
        <p className="text-sm text-red-500">*Choosing to integrate add-ons will incur additional start-up and monthly fees*</p>
        <p className="text-sm text-red-500">**Add-ons implemented after initial build will require a one-time upgrade fee and incur additional monthly fees**</p>
        <p className="text-sm text-red-500">
            ***Modular includes migrating from <strong className="text-slate-600">Standard</strong> to <strong className="text-green-500">Premium </strong>
            for a one-time upgrade fee of $500 and an increase to <strong className="text-green-500">Premium</strong> monthly fees***
        </p>
    </div>
    )}

      

      {/* Integrated Navigation Bar */}
      <div className="flex items-center justify-center lg:gap-6 pb-12 mt-5">
        {/* Prev Button */}
        <button 
          className="bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
          onClick={itemDecrease}
          disabled={item === 1}
        >
          ← 
        </button>

        {/* Dot Indicators */}
        <div className="flex lg:gap-3 p-3 rounded-full bg-slate-100 border border-slate-200">
          {SLIDES.map((slide) => (
            <button
              key={slide.id}
              className={`size-4 rounded-full cursor-pointer transition-all duration-300 ${
                item === slide.id 
                ? 'bg-green-500 w-8' 
                : 'bg-slate-300 hover:bg-slate-400'
              }`}
              onClick={() => setItem(slide.id)}
            />
          ))}
        </div>

        {/* Next Button */}
        <button 
          className="bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-600 disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
          onClick={itemIncrease}
          disabled={item === SLIDES.length}
        >
          → 
        </button>
      </div>

    </div>
  )
}