import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="grow hero-bg max-w-screen h-full place-items-center flex flex-col py-15 md:py-0">
      <Hero />
      <Carousel/>
      <div className="border rounded-2xl shadow-md shadow-slate-300 text-center bg-white p-10 mb-10 flex flex-col gap-5 font-bold">
        <p className="text-4xl border-b-2 rounded-b-2xl border-(--primary)">Returning to finalize your plan? </p>
        <p className="text-2xl">If you’ve tested the live demos in the showroom, get a custom quote and see how I can scale with you.</p>
        <p className="text-2xl ">Head on over to the <button className="p-5 border rounded-3xl bg-(--primary) text-2xl">Quote Builder</button></p>
      </div>
    </div>
  );
}
