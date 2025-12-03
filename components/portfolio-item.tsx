import { Site } from "@/lib/definitions"
import Image from "next/image"


export default function PortfolioItem(props: Site){
    return(
        <section  className="bg-white lg:grid xl:mx-15 lg:place-content-center rounded-3xl border border-(--tertiary) boxShadow">
            <div className="2xl:mx-auto 2xl:w-screen xl:max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
                <div className="lg:max-w-prose flex flex-col gap-10 place-items-center">
                    <h1 className="text-2xl font-bold boldText-primary 2xl:text-5xl">
                        {props.name}
                    </h1>
                    <a href={props.url} target="_blank" className="2xl:text-2xl text-center text-sky-600">{props.url}</a>
                    <p className="mt-4 text-base text-pretty text-gray-700 2xl:text-3xl">
                        {props.description}
                    </p>
                    <a href={props.repo} className="mt-4 px-15 text-3xl text-center boldText-secondary" target="_blank">Github Repo</a>
                </div>

                <Image 
                    src={props.image}
                    width={800}
                    height={800}
                    alt={`${props.name} Preview`}
                    className="2xl:w-full"
                />
            </div>
        </section>
    )
}