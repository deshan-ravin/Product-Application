import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
//import { ModeToggle } from "./themeprovider";

const Navbar = () => {
  return (
  
    <div className="w-[calc(100%-2rem)] max-w-4xl mx-auto mt-4 flex items-center justify-between gap-5 bg-zinc-500 px-7 rounded-xl" style={{ padding: '0.5rem 0' }}>
    <div className="container mx-auto h-full">
      <div className="flex justify-between items-center h-full">
        <ul className="flex w-full justify-evenly text-white">
          <li>
            <Link href="/" className=" hover:text-red-500">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/user" className=" hover:text-red-500">
              <p>User</p>
            </Link>
          </li>
          <li>
            <Link href="/create" className=" hover:text-red-500">
              <p>create</p>
            </Link>
          </li>
          <li>
            <Link href="/" className=" hover:text-red-500">
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  

      
  
    
  );
};

export default Navbar;