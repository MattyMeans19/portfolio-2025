import type { Metadata } from "next";
import "../globals.css";
import TopNav from "@/components/enterprise/top-nav";
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
      <div className="grow max-w-screen h-full flex flex-col">
        <TopNav />
        {children}
      </div>
  );
}