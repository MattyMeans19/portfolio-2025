import About from "@/components/about-me";
import Contact from "@/components/contact-me";
import Hero from "@/components/Hero";
import Project from "@/components/portfolio-item";
import Stack from "@/components/stack";
import { db } from "@/db"
import { PorfolioItem } from "@/db/schema"

export default async function Home() {
      const projects = await db.select().from(PorfolioItem);
  
  return (
    <div className="grow max-w-screen h-full place-items-center flex flex-col gap-60 py-15 md:py-0 relative z-0">
      <section id="about" className="w-[70vw] mt-20 flex flex-col gap-20">
        <Hero />
        <About />
      </section>
      <section id="work" className="w-[70vw]">
        <h1 className="section-title boldText-primary">Work</h1>
        <Project sites={projects}/>
      </section>
      <section id="stack" className="w-[70vw]">
        <h1 className="section-title boldText-primary">Stack</h1>
        <Stack />
      </section>
      <section id="contact" className="w-[70vw]">
        <h1 className="section-title boldText-primary">Contact</h1>
        <Contact />
      </section>
    </div>
  );
}
