import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pb-20 pt-2 bg-zinc-300 min-h-screen">
      <NavBar />

      <div className="mt-16 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-cyan-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center">
          <h2 className="text-4xl font-bold lg:text-5xl mb-6">
            <Link href="/">WELCOME TO PRODUCTS DASHBOARD 🛍️</Link>
          </h2>
        </div>
      </div>
      ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
      <div  className="flex justify-between items-center h-full">
      ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
        <Image src="/shop.svg" alt="Logo" width={200} height={200} />
        ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
        </div>
        ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
      <Footer />
    </main>
  );
}
