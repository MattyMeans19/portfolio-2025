import Image from "next/image";

export default function HeroImage(){
    return(
        <div className="grid grid-cols-5 grid-rows-2 bg-(--secondary)/40 rounded-t-full p-10 relative border-2 border-(--secondary-dark)/45 
            shadow-xl shadow-slate-700/35">
            <div className="absolute bottom-0 left-1/10 border-t-10 border-x-2 border-dashed border-(--secondary-dark)/45
             size-[80%] rounded-t-full"></div>
             <div className="absolute bottom-0 left-1/4 size-[50%] rounded-t-full bg-amber-500/60"></div>
            <Image 
                src="/pcIcon.png"
                alt="PC Icon"
                height={150}
                width={150}
                className="col-start-3 row-start-2 h-full translate-y-10"
            />
            <Image 
                src="/postgresql-logo.png"
                alt="Postgres Logo"
                height={150}
                width={150}
                className="col-start-1 row-start-2 logo1"
            />
            <Image 
                src="/expressJS-logo.png"
                alt="Express.JS Logo"
                height={150}
                width={150}
                className="col-start-2 row-start-1 logo2"
            />
            <Image 
                src="/react-logo.png"
                alt="React Logo"
                height={150}
                width={150}
                className="col-start-4 row-start-1 logo3"
            />
            <Image 
                src="/nodeJS-logo.png"
                alt="Node.JS Logo"
                height={150}
                width={150}
                className="col-start-5 row-start-2 logo4"
            />
        </div>
    )
}