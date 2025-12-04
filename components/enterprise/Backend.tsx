import { Content } from "@/lib/definitions";
import { backendData } from "@/lib/backend-content";
import Link from "next/link";

interface Display{
    display: string
}

export default function Backend(props: Display){
    const data: Content[] = backendData.filter(data => data.name === props.display);


    return(
        <div className="grow xl:grid grid-cols-8">
            <div className="col-span-1 border-e">
                <ul className="p-5 flex xl:flex-col gap-10 2xl:text-2xl boldText-primary">
                    <li className={`${props.display === "Express.JS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/Express.JS">Express.JS</Link></li>
                    <li className={`${props.display === "PostgreSQL" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/PostgreSQL">PostgreSQL</Link></li>
                    <li className={`${props.display === "RESTful-APIs" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/RESTful-APIs">RESTful APIs</Link></li>
                </ul>
            </div>
                
            <div className="col-span-7 place-items-center flex flex-col gap-15 p-15 overflow-y-scroll">
                <h1>{data[0].name}</h1>
                <p>{data[0].data}</p>
            </div>
        </div>
    )
}