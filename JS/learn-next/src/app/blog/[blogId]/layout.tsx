import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    {children}
    <h1 style={{ backgroundColor: 'green', color: 'white'}}>Quang Cao De</h1>
   </>
  );
}
