import PortfolioItem from "@/components/portfolio-item"
import { sites } from "@/lib/Sites"
import { Suspense } from "react"
import Loading from "@/components/loading"

export default function Portfolio(){
    return(
        <div className="hero-bg grow flex flex-col gap-10 p-5 md:p-15">
            {sites.map((site, index) => (
                <Suspense key={index} fallback={<Loading />}>
                <PortfolioItem 
                    name={site.name}
                    url={site.url}
                    image={site.image}
                    description={site.description}
                    repo={site.repo}                
                />   
                </Suspense>
                
            ))}
        </div>
    )
}