import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Anta} from 'next/font/google';


export const metadata: Metadata = {
  title: "Matthew Means- Dev",
  description: `Full-Stack Web Developer, Matthew Means. Located in Farmington, NM. Qaulity web design, for affordable prices. Servicing small businesses,
  e-commerce, hobbyists, bloggers, and more!`,
};

const anta = Anta({
  weight: "400",
  style: "normal",
  display: 'auto',
  subsets: ["latin"],
  variable: "--font-anta"

})

export const dynamic = 'force-dynamic';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth CustomBG">
      <body className={`flex flex-col max-w-screen min-h-screen ${anta.variable} font-serif`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
