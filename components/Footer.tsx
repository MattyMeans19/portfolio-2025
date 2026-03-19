import Link from "next/link";

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="w-full border-t-2 border-(--tertiary)">
            <div className=" w-full p-8 flex flex-nowrap justify-around">
                <p className="w-full text-center text-gray-500">
                    ©{year} Matthew Means
                </p>
                <p className="w-full text-center text-2xl text-gray-500">
                    Full-Stack Developer 
                </p>
            </div>
        </footer>
    )
}