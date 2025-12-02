import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full bg-gray-50 border-t-2 border-(--tertiary)">
            <div className="mx-auto max-w-full px-4 py-2 sm:px-2 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center sm:justify-start gap-15">
                    <a href="https://www.linkedin.com/in/matthew-means-902a4b97" target="_blank">
                        <img src="/InBug-Black.png" alt="Link to Linkdin profile" className="size-10"/>
                    </a>
                    <Link href="/enterprise" className="border border-(--tertiary) shadow-md shadow-slate-700 
                        rounded-full place-content-center p-2">
                        Enterprise
                    </Link>
                    <Link href="/personal" className="border border-(--tertiary) shadow-md shadow-slate-700 
                        rounded-full place-content-center p-2 text-center">
                        Small Business/Personal
                    </Link>
                </div>

                <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                    Copyright © 2025. All rights reserved.
                </p>
                </div>
            </div>
        </footer>
    )
}