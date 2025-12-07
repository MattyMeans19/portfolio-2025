import { Content } from "@/lib/definitions";
import { backendData } from "@/lib/backend-content";
import Link from "next/link";

interface Display{
    display: string
}

export default function Backend(props: Display){
    const data: Content[] = backendData.filter(data => data.title === props.display);


    return(
        <div className="grow hero-bg flex flex-col xl:grid grid-cols-8">
            <div className="bg-white col-span-1 border-b-2 border-(--tertiary) xl:border-e">
                <ul className="p-5 flex xl:flex-col gap-10 2xl:text-2xl boldText-primary">
                    <li className={`${props.display === "Express.JS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/Express.JS">Express.JS</Link></li>
                    <li className={`${props.display === "PostgreSQL" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/PostgreSQL">PostgreSQL</Link></li>
                    <li className={`${props.display === "RESTful-APIs" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Backend/RESTful-APIs">RESTful APIs</Link></li>
                </ul>
            </div>
                
            <div className="grow bg-white w-[80%] h-[80%] border-10 border-double border-(--tertiary) rounded-4xl my-10 place-self-center col-span-7 place-items-center 
                p-15 flex flex-col gap-15 justify-around boxShadow">
                <h1 className="text-4xl">{data[0].title}</h1>
                <p className="md:text-2xl">{data[0].description}</p>
                <h2 className="text-2xl text-center"><strong className={`${data[0].exampleSite != "" ? 'boldText-primary' : 'hidden'}`}>Example site:</strong> {data[0].exampleSite}</h2>
                {data[0].url ? <a href={data[0].url} className="text-2xl text-blue-500" target="_blank">Visit Site</a> : null}
                <h2 className="text-2xl">Link to Github Repo:</h2>
                <a href={data[0].siteRepo} className="break-all boldText-secondary md:text-2xl" target="_blank"><p>{data[0].siteRepo}</p></a>
            </div>

        </div>
    )
}