import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-white border-b-2 border-(--tertiary) z-10">
        <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image 
                    src="/BrandTag.png"
                    alt="Matthew Means Brand Tag"
                    height={50}
                    width={50}
                    className="rounded-full"
                />
                </Link>
                <h1 className="hidden md:block text-2xl lg:text-5xl text-(--primary) text-shadow-md text-shadow-black">Matthew <strong className="text-(--secondary)">Means</strong></h1>
                <h2 className="hidden md:block place-self-end lg:text-2xl text-(--tertiary) text-shadow-sm text-shadow-black">Full-Stack Developer</h2>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Developer Info" className="md:block">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 lg:text-2xl" href="#"> About </Link >
                    </li>

                    <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 lg:text-2xl" href="#"> Portfolio </Link >
                    </li>

                    <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75 lg:text-2xl" href="#"> Contact </Link >
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </header>
    )
}