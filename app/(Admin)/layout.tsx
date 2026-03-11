import {Anta} from 'next/font/google';
import "@/app/globals.css";

const anta = Anta({
  weight: "400",
  style: "normal",
  display: 'auto',
  subsets: ["latin"],
  variable: "--font-anta"

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-screen h-screen ${anta.variable} font-serif`}>
        {children}
      </body>
    </html>
  );
}
