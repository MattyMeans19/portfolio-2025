
export default function Footer(){
    return(
        <footer className="bg-gray-50 border-t-2 border-(--tertiary)">
        <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center sm:justify-start">
                <a href="https://www.linkedin.com/in/matthew-means-902a4b97" target="_blank">
                    <img src="/InBug-Black.png" className="size-10"/>
                </a>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright © 2025. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    )
}