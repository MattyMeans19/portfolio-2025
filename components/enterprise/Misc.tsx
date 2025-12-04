import { Content } from "@/lib/definitions";
import { miscData } from "@/lib/misc-content";
import Link from "next/link";

interface Display{
    display: string
}

export default function Misc(props: Display){
    const data: Content[] = miscData.filter(data => data.name === props.display);


    return(
        <div className="grow xl:grid grid-cols-8">
            <div className="col-span-1 border-e">
                <ul className="p-5 flex xl:flex-col gap-10 2xl:text-2xl boldText-primary">
                    <li className={`${props.display === "Next.JS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Misc/Next.JS">Next.JS</Link></li>
                    <li className={`${props.display === "TypeScript" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Misc/TypeScript">TypeScript</Link></li>
                </ul>
            </div>
                
            <div className="col-span-7 place-items-center flex flex-col gap-15 p-15 overflow-y-scroll">
                <h1>{data[0].name}</h1>
                <p>{data[0].data}</p>
            </div>
        </div>
    )
}