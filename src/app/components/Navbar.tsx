import React from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
export default  function Navbar() {
  return (
    <header className="w-full py-4  px-10 md:px-20 flex justify-between items-center">
      <div>
       <Image src={'/logo.png'} alt="logo image" className="w-20 rounded-3xl md:w-32" width={100} height={100}/>
      </div>
      <ul className="flex font-bold gap-4 items-center">
        <li className="hidden md:flex text-gray-400 font-bold text-xs md:text-lg font-serif hover:text-yellow-500"><Link href={'/'}>Home</Link></li>
        <li className="hidden md:flex text-gray-400 font-bold text-xs md:text-lg font-serif hover:text-yellow-500"><Link href={'/use-cases'}>Use Cases</Link></li>
        <li className="hidden md:flex text-gray-400 font-bold text-xs md:text-lg font-serif hover:text-yellow-500"><Link href={'/contact'}>Contact</Link></li>
        <li className="text-yellow-300 border-2 border-yellow-300 text-sm md:text-xl p-2 md:py-3 md:px-3 rounded-xl"><Link href={'/auth'}>Get Started</Link></li>
      </ul>
    </header>
  );
}
