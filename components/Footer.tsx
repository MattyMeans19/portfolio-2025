import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full bg-gray-50 border-t-2 border-(--tertiary)">
            <div className="mx-auto w-full px-4 py-2 sm:px-2 lg:px-8">
                <div className="sm:flex sm:items-center gap-5 w-full">
                    <Link href={"/showroom"} className="text-(--secondary) text-shadow-md text-shadow-black mb-4 text-2xl border-r pr-5"> Showroom</Link>
                    <Link href={"/quote"} className="text-(--secondary) text-shadow-md text-shadow-black mb-4 w-full text-2xl"> Quote Builder</Link>
                <p className="mt-4 w-full text-end text-sm text-gray-500 lg:mt-0">
                    Copyright © 2025. All rights reserved.
                </p>
                </div>
            </div>
        </footer>
    )
}