import { intro } from "@/lib/personal-intro";
import IntroPanel from "@/components/intro-panel";
import { Intro } from "@/lib/definitions";
import Billboard from "@/components/personal-billboard";
import Link from "next/link";
export default function Personal(){
    
    return(
            <div className="hero-bg flex flex-col gap-20 max-w-full px-4 py-8 sm:px-6 lg:px-8 overflow-y-scroll">
                {intro.map((panel: Intro, index: number) => 
                    <IntroPanel 
                        key={index}
                        text={panel.text}
                        image={panel.imageLink}
                        alt={panel.imageAlt}
                        anim={panel.animation}
                    />
                )}
                <Billboard />

                <div className="bg-white rounded-2xl p-10 shadow-2xl shadow-slate-700 text-2xl md:text-4xl text-center">
                    <p> Still unsure? No worries, I know it's a big decision. </p>
                    <p> Why not check out my <Link href="#"><strong className="text-(--primary) text-shadow-md text-shadow-black">Portfolio</strong></Link>? </p>
                    <p>Nothing better to showcase what I can do for you than a visual example!</p>
                </div>
  
            </div>
    )
}