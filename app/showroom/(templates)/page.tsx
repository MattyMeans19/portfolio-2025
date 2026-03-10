'use client'

import { useState } from "react"


export default function Showroom(){
    const pages = {
        business_standard: "https://business-standard-b575a85dcac5.herokuapp.com/",
        business_premium: "https://business-premium-0424d21e5ca2.herokuapp.com/",
        restaurant_standard: "https://restaurant-standard-248d9b3aeab1.herokuapp.com/",
        restaurant_premium: "https://restaurant-premium-9bed4c28f5c2.herokuapp.com/",
    }

    const [currentPage, setCurrentPage] = useState(pages.business_standard);
    const [showNotes, ToggleNotes] = useState(false);

    function SwitchFront(){
        if(currentPage.includes(pages.business_standard)){
            if(currentPage.includes("/admin-portal")){
                setCurrentPage(pages.business_standard);
            } else{
                setCurrentPage(pages.business_standard + "/admin-portal")
            }
        }
        if(currentPage.includes(pages.business_premium)){
            if(currentPage.includes("/admin-portal")){
                setCurrentPage(pages.business_premium);
            } else{
                setCurrentPage(pages.business_premium + "/admin-portal")
            }
        }
        if(currentPage.includes(pages.restaurant_standard)){
            if(currentPage.includes("/admin-portal")){
                setCurrentPage(pages.restaurant_standard);
            } else{
                setCurrentPage(pages.restaurant_standard + "/admin-portal")
            }
        }
        if(currentPage.includes(pages.restaurant_premium)){
            if(currentPage.includes("/admin-portal")){
                setCurrentPage(pages.restaurant_premium);
            } else{
                setCurrentPage(pages.restaurant_premium + "/admin-portal")
            }
        }
    }

    return(
        <div className="grow min-h-screen flex flex-col">
            <div className="w-full h-[5vh] flex flex-nowrap justify-around gap-2 items-center border-b-5 hero-bg">
                <button className={`showroomButton ${currentPage.includes(pages.business_standard) ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (setCurrentPage(pages.business_standard))}>
                    Business Standard
                </button>
                <button className={`showroomButton ${currentPage.includes(pages.business_premium) ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (setCurrentPage(pages.business_premium))}>
                    Business Premium
                </button>
                <button className={`showroomButton ${currentPage.includes(pages.restaurant_standard) ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (setCurrentPage(pages.restaurant_standard))}>
                    Restaurant Standard
                </button>
                <button className={`showroomButton ${currentPage.includes(pages.restaurant_premium) ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (setCurrentPage(pages.restaurant_premium))}>
                    Restaurant Premium
                </button>
            </div>
            <div className="w-full h-[5vh] flex flex-nowrap items-center justify-around hero-bg">
                <button className={`showroomButton ${!currentPage.includes("/admin-portal") ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (SwitchFront())}>
                    Webfront
                </button>
                <button className={`showroomButton ${currentPage.includes("/admin-portal") ? 'bg-(--primary)' : 'bg-(--secondary)'}`}
                        onClick={() => (SwitchFront())}>
                    Admin
                </button>
            </div>
            <div className="w-full border relative">
                <h1 className="text-2xl underline text-center cursor-pointer"
                        onClick={() => (ToggleNotes(!showNotes))}>
                    {showNotes ? "Important Notes ⬇️" : "Important Notes ⬆️"}
                </h1>
                <div className={`flex flex-col gap-1 fixed z-100 bg-white w-full border rounded-b-2xl ${showNotes ? 'visible' : 'hidden'}`}>
                    <h2 className="text-lg text-center">Standard Templates only have <strong className="text-(--secondary) font-bold">One</strong> user. To view multi-user 
                    set-up switch to <strong className="text-(--secondary) font-bold">Premium Template.</strong></h2>
                    <h2 className="text-lg text-center">Admin login for all templates (Case-Sensitive): username: Admin | password: Admin123</h2>
                    <h2 className="text-lg text-center">Manager login for <strong className="text-(--secondary) font-bold">Premium Templates</strong> (Case-Sensitive): username: Test_Manager | password: Manager123</h2>
                    <h2 className="text-lg text-center">For <strong className="text-(--secondary) font-bold">Premium Templates</strong> use: Visa: 4242 4242 4242 4242 with any future data and any 3-digit CVC to simulate a successful transaction.</h2>
                    <h2 className="text-lg text-center">For <strong className="text-(--secondary) font-bold">Premium Templates</strong> use: Visa: 4000 0000 0000 0032 with any future data and any 3-digit CVC to simulate a failed transaction.</h2>                    
                </div>

            </div>
            <iframe 
                src={currentPage}
                className="grow w-full border-none z-50"
            />

        </div>
    )
}