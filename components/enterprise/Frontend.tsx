import { Content } from "@/lib/definitions";
import { frontendData } from "@/lib/frontend-content"
import Link from "next/link";

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
                    <li className={`${props.display === "EJS" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/EJS">EJS</Link></li>
                    <li className={`${props.display === "React" ? 'boldText-primary' : 'boldText-secondary'}`}>
                        <Link href="/enterprise/Frontend/React">React</Link></li>
                </ul>
            </div>
                
            <div className="col-span-7 place-items-center flex flex-col gap-15 p-15 overflow-y-scroll">
                <h1>{data[0].name}</h1>
                <p>{data[0].data}</p>
            </div>
        </div>
    )
}