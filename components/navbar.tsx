"use client";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { Providers } from "@/app/providers";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-background text-foreground p-7 border-b border-gray-400 md:p-8 md:items-center md:border-b md:border-b-gray-300 md:dark:border-b-gray-600 mb-10">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto md:p-6 md:justify-between">
        <div className="text-2xl font-bold xl:text-4xl md:pt-2">
          <h2>Logo</h2>
        </div>
        <div className="flex items-center 2xl:flex-row 2xl:ml-auto md:ml-auto">
          <div className="hover:cursor-pointer md:pt-2">
              <ThemeSwitch /> 
          </div>
          <div className="">
            <Hamburger
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
        <div className="mt-2 md:justify-center md:space-x-9 md:mt-2 hidden md:block">
          <Link
            href="/dashboard"
            className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl"
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
