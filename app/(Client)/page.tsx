import About from "@/components/about-me";
import Contact from "@/components/contact-me";
import Hero from "@/components/Hero";
import Project from "@/components/portfolio-item";
import Stack from "@/components/stack";
import { db } from "@/db"
import { PortfolioItem } from "@/db/schema"

export default async function Home() {
      const projects = await db.select().from(PortfolioItem);
  
  return (
    <div className="grow max-w-full h-full place-items-center flex flex-col gap-60 py-15 md:py-0 pl-5 lg:pl-0 relative z-0 scroll-smooth">
      <section id="about" className="content-section mt-20 flex flex-col gap-20">
        <Hero />
        <h1 className="section-title boldText-primary">About Me</h1>
        <About />
      </section>
      <section id="work" className="content-section">
        <h1 className="section-title boldText-primary">Work</h1>
        <Project sites={projects}/>
      </section>
      <section id="stack" className="content-section">
        <h1 className="section-title boldText-primary">Stack</h1>
        <Stack />
      </section>
      <section id="contact" className="content-section">
        <h1 className="section-title boldText-primary">Contact</h1>
        <Contact />
      </section>
    </div>
  );
}
