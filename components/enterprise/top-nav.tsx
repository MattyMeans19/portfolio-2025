'use client';

import Link from "next/link";
import { useState } from "react";

export default function TopNav(){
    const [currentTab, updateTab] = useState("Intro");

    function ChangeTab(tab: string){
        updateTab(tab);
    }

    return(
        <div className="border-b border-black px-2 w-full">
            <div role="tablist" className="flex">
               <Link href="/enterprise" role="tab" aria-selected="true" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "Intro" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("Intro"))}>
                Introduction
                </Link>

                <Link href="/enterprise/Frontend" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "Frontend" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("Frontend"))}>
                Front-End
                </Link>

                <Link href="/enterprise/Backend" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black 
                 ${currentTab === "Backend" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("Backend"))}>
                Back-End
                </Link>

                <Link href="/enterprise/Misc" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "Misc" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("Misc"))}>
                Misc
                </Link>
            </div>
        </div>
    )
}