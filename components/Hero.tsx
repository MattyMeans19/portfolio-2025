import Link from "next/link";
import HeroImage from "./Hero-image";

export default function Hero(){
    return(
        <section className="lg:grid h-full place-content-center">
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

                <div className=" mt-4 flex gap-4 sm:mt-6">
                    <Link className="inline-block rounded border border-(--tertiary) bg-(--primary) px-5 py-3 font-medium text-white shadow-md shadow-slate-600/45 
                    transition-colors hover:bg-(--primary-dark) hover:text-gray-900 text-shadow-sm text-shadow-black" href="/personal">
                    Small Business/Personal
                    </Link>

                    <Link className="inline-block rounded border border-(--tertiary) px-5 py-3 font-medium bg-(--secondary) text-white shadow-md shadow-slate-600/45 
                    transition-colors hover:bg-(--secondary-dark) hover:text-gray-900 text-shadow-sm text-shadow-black" href="/enterprise">
                    Enterprise
                    </Link>
                </div>
                </div>

                <div  className="mx-auto mt-10 max-w-md md:block">
                    <HeroImage />
                </div>
            </div>
        </section>
    )
}