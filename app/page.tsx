import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="grow hero-bg max-w-screen h-full place-items-center py-15 md:py-0 flex flex-col gap-15">
      <Hero />
      <Carousel/>
    </div>
  );
}
