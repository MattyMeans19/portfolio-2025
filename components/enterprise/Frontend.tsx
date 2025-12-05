import { Content } from "@/lib/definitions";
import { frontendData } from "@/lib/frontend-content"
import Image from "next/image";
import Link from "next/link";
import Iframe from "react-iframe";

interface Display{
    display: string
}

export default function Frontend(props: Display){
    const data: Content[] = frontendData.filter(data => data.name === props.display);


    return(
        <div className="grow xl:grid grid-cols-8">
            <div className="col-span-1 border-e">
                <ul className="p-5 flex xl:flex-col gap-10 2xl:text-2xl boldText-primary">
                    <li className={`${props.display === "TailwindCSS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/TailwindCSS">TailwindCSS</Link></li>
                    <li className={`${props.display === "Other-Styling" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/Other-Styling">Other Styling</Link></li>
                    <li className={`${props.display === "React" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/React">React</Link></li>
                    <li className={`${props.display === "Next.JS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/Next.JS">Next.JS</Link></li>
                </ul>
            </div>
                
            <div className="col-span-7 place-items-center flex flex-col gap-15 p-15 overflow-y-scroll">
                <h1 className="text-4xl underline">{data[0].name}</h1>
                {props.display != "Intro" ?
                <div className="flex flex-col xl:grid grid-cols-2">
                    <div className={`2xl:w-[600px] md:h-[600px] overflow-y-scroll space-y-10 ${data[0].iframe === null ? 'col-span-full' : 'col-span-1'}`}>
                        {data[0].img.map((image, index) => (
                           <Image key={index} src={image} width={600} height={600} alt="Code snippet for Next.js"/> 
                        ))}
                    </div>
                    {data[0].iframe != null ?
                    <Iframe 
                        url={data[0].iframe}
                        width="600px"
                        height="600px"
                    />: null}
                </div>: null}
                <p className="text-2xl md:text-3xl border-5 p-5 md:p-10 border-(--tertiary) rounded-3xl">{data[0].data}</p>
            </div>
        </div>
    )
}