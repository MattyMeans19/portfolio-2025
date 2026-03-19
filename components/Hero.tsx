export default function Hero(){
    
    return(
        <>
        <div className="w-full">
            <div className="flex flex-col gap-10">
                <div className="flex flex-nowrap gap-5">
                    <span className="bg-(--primary) inline-block h-2 w-2 rounded-full animate-pulse self-center"></span>
                    <p className="boldText-primary text-2xl">Available for new projects!</p>
                </div>
            <h1 className="text-8xl boldText-primary">Matthew Means</h1>
            <h2 className="text-6xl boldText-secondary">Full-Stack Developer</h2>

            <p className="mt-4 text-base text-pretty text-(--tertiary) sm:text-lg/relaxed lg:text-2xl">
                I deliver seamless digital solutions from database to 
                beautiful user interface. Leveraging React, Next.js, and Express.js, 
                I provide robust, all-in-one websites that are 
                easy to manage and engineered for reliability.
            </p>
            </div>
        </div>
    </>
    )
}