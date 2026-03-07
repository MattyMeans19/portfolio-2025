import Link from "next/link";
import HeroImage from "./Hero-image";

export default function Hero(){
    return(
        <section className="lg:grid h-full place-content-center mt-5">
            <div className=" bg-white border lg:h-full place-content-center border-(--tertiary) rounded-3xl mx-auto max-w-7xl px-4 sm:px-6 sm:py-24
                md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 boxShadow">
                <div className="max-w-prose text-left">
                <h1 className="text-4xl font-bold text-(--tertiary) sm:text-5xl">
                    Full-Stack <strong className="text-(--primary)"> Reliability </strong>
                    Next-Level <strong className="text-(--secondary)"> Performance </strong>
                </h1>

                <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed lg:text-2xl">
                    I deliver seamless digital solutions from database to 
                    beautiful user interface. Leveraging React, Next.js, and Express.js, 
                    I provide robust, all-in-one websites that are 
                    easy to manage and engineered for reliability.
                </p>
                </div>

                <div  className="mx-auto mt-10 max-w-md md:block">
                    <HeroImage />
                </div>
            </div>
        </section>
    )
}