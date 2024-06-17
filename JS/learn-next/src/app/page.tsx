import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2> Home Page</h2>
        <Link href={'/register'}> Go to register page</Link>
        <br />
        <Link href={'/login'}> Go to login page</Link>
    </main>
  );
}
