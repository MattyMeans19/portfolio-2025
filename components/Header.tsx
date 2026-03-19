import Image from "next/image";
import Link from "next/link";

export default function Header(){
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Stack", href: "#stack"},
        { name: "Contact", href: "#contact" }
    ];
    return(
        <div className="border-b-2 border-(--tertiary) z-10 w-full fixed top-0 bg-(--background)/50 backdrop-blur-md">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <Image 
                        src="/BrandTag.png"
                        alt="Matthew Means Brand Tag"
                        height={50}
                        width={50}
                        className="rounded-full z-50"
                />
                <nav className="w-full z-50">
                    <ul className="flex gap-4 p-4 place-content-end">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                        <a 
                            href={link.href} 
                            className="hover:text-blue-600 transition-colors text-primary"
                        >
                            {link.name}
                        </a>
                        </li>
                    ))}
                    <li>
                        <Link href={"/quote"} className="text-2xl bg-(--primary) p-1 rounded-full">
                        Quote
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}