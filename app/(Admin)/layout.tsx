import {Anta} from 'next/font/google';
import "@/app/globals.css";

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
    <html lang="en">
      <body className={`flex flex-col max-w-screen min-h-screen ${anta.variable} font-serif`}>
        {children}
      </body>
    </html>
  );
}
