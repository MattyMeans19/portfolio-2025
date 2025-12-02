import PortfolioItem from "@/components/portfolio-item"

export default function Portfolio(){
    return(
        <div className="hero-bg grow flex flex-col gap-10 p-15">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    )
}