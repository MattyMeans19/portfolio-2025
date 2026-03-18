import Project from "@/components/portfolio-item";
import { db } from "@/db"
import { PorfolioItem } from "@/db/schema"

export default async function Portfolio(){
    const projects = await db.select().from(PorfolioItem);

    return(
        <div className="hero-bg grow flex flex-col gap-10 p-5 md:p-15">
            <Project sites={projects}/>
        </div>
    )
}