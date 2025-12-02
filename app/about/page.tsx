import Image from "next/image"


export default function About(){
    return(
        <div className="grow hero-bg p-30">
            <div className="flex flex-col place-items-center gap-4 p-15 bg-white border border-(--tertiary) rounded-3xl">
                <Image
                    src="/ME.jpg"
                    width={400}
                    height={400}
                    alt="Matthew Means - Web Developer"
                    className="rounded-full border-10 border-double border-(--tertiary) bg-(--primary)"
                />

                <div>
                    <h3 className="font-medium text-gray-900 sm:text-lg">Title goes here</h3>

                    <p className="mt-0.5 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                    nesciunt quas non animi.
                    </p>
                </div>
            </div>    
        </div>

    )
}