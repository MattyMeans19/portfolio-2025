'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav(){
    const [currentTab, updateTab] = useState("");

    function ChangeTab(tab: string){
        updateTab(tab);
    }

    useEffect(() =>{
        const currentPath = window.location.pathname;
        const path1 = "/Frontend";
        const path2 = "/Backend";
        const path3 = "/Misc"
    
        if(currentPath.includes(path1)){
            updateTab("/enterprise/Frontend");
        } else if(currentPath.includes(path2)){
            updateTab("/enterprise/Backend");
        } else if(currentPath.includes(path3)){
            updateTab("/enterprise/Misc");
        } else{
            updateTab("/enterprise");
        }

    }, [])


    return(
        <div className="border-b border-black px-2 w-full">
            <div role="tablist" className="flex">
               <Link href="/enterprise" role="tab" aria-selected="true" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "/enterprise" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("/enterprise"))}>
                Introduction
                </Link>

                <Link href="/enterprise/Frontend" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "/enterprise/Frontend" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("/enterprise/Frontend"))}>
                Front-End
                </Link>

                <Link href="/enterprise/Backend" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black 
                 ${currentTab === "/enterprise/Backend" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("/enterprise/Backend"))}>
                Back-End
                </Link>

                <Link href="/enterprise/Misc" role="tab" aria-selected="false" className={`border-2 border-transparent px-1 xl:px-6 py-2 font-semibold
                 hover:bg-(--primary) hover:text-white hover:text-shadow-md hover:text-shadow-black
                 ${currentTab === "/enterprise/Misc" ? "ring-2 bg-(--primary) outline-0" : ""}`}
                 onClick={() => (ChangeTab("/enterprise/Misc"))}>
                Misc
                </Link>
            </div>
        </div>
    )
}