'use client'

import Image from "next/image";
import { useState } from "react"
import ShopifyLogo from "@/public/logos/shopify.png"
import WPLogo from "@/public/logos/WordPress.png"
import MyLogo from "@/public/BrandTag.png"

export default function Carousel(){
    const [item, setItem] = useState(1);

    function itemIncrease(){
        if(item <= 6){
            const newItem = item + 1;
            setItem(newItem)
        }
    }

    function itemDecrease(){
        if(item > 1){
            const newItem = item - 1;
            setItem(newItem)
        }
    }
    return(
        <div className="grow h-full relative bg-white w-[85vw] m-7.5 rounded-2xl border">
            <button className="absolute left-2 top-[50%] lg:text-3xl bg-slate-800/60 p-5 text-white hover:text-green-700 rounded-xl cursor-pointer"
                onClick={() => (itemDecrease())}>
                ← 
             </button>
            <button className="absolute right-2 top-[50%] lg:text-3xl bg-slate-800/60 p-5 text-white hover:text-green-700 rounded-xl cursor-pointer"
                onClick={() => (itemIncrease())}>
                → 
            </button>

            {item === 1 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }
                        {item === 2 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }
                        {item === 3 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }
                        {item === 4 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }
                        {item === 5 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }
                        {item === 6 && 
                <div className="place-items-center p-5 lg:p-20 w-full h-full flex flex-col gap-30">
                    <h2 className="mt-5 text-2xl md:text-3xl text-center text-pretty text-gray-700 sm:text-lg/relaxed border-b-10 border-double">
                        With DIY platforms like Shopify and WordPress more accessible than ever, why invest in a custom-built solution from the ground up?
                    </h2>
                    <div className="grow grid grid-cols-3 w-full h-full mb-30 gap-5 md:gap-10">
                        <Image 
                            src={ShopifyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 place-self-end"
                        />
                        <Image 
                            src={WPLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-1 row-start-2 place-self-end"
                        />
                        <p className="col-start-2 row-span-2 content-center font-bold text-center text-3xl text-red-600"> VS </p>
                        <Image 
                            src={MyLogo}
                            alt="shopify black logo"
                            width={300}
                            height={300}
                            className="size-10 lg:size-25 col-start-3 row-span-2 self-center rounded-full"
                        />
                    </div>
                </div>
            }

            <div className="absolute bottom-10 w-fit place-self-center flex flex-nowrap gap-1 border p-2 rounded-full bg-slate-400/50 shadow-2xl shadow-gray-600 ">
                <button className={`${item === 1 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(1))}>
                </button>
                <button className={`${item === 2 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(2))}>
                </button>
                <button className={`${item === 3 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(3))}>
                </button>
                <button className={`${item === 4 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(4))}>
                </button>
                <button className={`${item === 5 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(5))}>
                </button>
                <button className={`${item === 6 ? 'bg-green-500' : 'bg-orange-500'} size-5 border rounded-full cursor-pointer`}
                    onClick={() => (setItem(6))}>
                </button>
            </div>
        </div>
    )
}