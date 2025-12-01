import type { Metadata } from "next";
import "../globals.css";
import SideMenu from "@/components/enterpirse/side-menu";

export const metadata: Metadata = {
  title: "Matthew Means- Dev",
  description: "Web portfolio site for full-stack developer, Matthew Means.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen relative">
        <SideMenu />
        {children}
      </body>
    </html>
  );
}