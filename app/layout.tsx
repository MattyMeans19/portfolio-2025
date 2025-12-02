import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matthew Means- Dev",
  description: "Web portfolio site for full-stack developer, Matthew Means, from Farmington, NM USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col max-w-screen min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
