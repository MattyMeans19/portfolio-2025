import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="max-w-screen h-screen flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
