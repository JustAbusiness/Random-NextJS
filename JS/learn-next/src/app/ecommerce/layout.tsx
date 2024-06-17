import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Filter from "./components/filter/page";
import Search from "./components/search/page";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Filter />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Search />
        {children}
      </div>
    </div>
  );
}
