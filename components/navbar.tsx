"use client";

import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="flex flex-col bg-background text-foreground rounded-xl p-9 md:p-8 md:items-center md:border md:border-gray-200">
      <div className="flex flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold ml-10 md:pr-6">
          Logo
        </h2>
        <div className="flex justify-end ml-80 sm:ml-65 md:ml-150 md:mt-2">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground border border-border hover:cursor-pointer"
          >
            {isDark ? (<>
              <Sun size={18} /> 
            </>) : (<>
              <Moon size={18}/> 
            </>)}
          </button>
        </div>
        <div className="mt-2 md:justify-center md:space-x-9 md:mt-2 hidden md:block">
          <Link href="/dashboard" className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl">Home</Link>
          <Link href="/dashboard" className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl">About</Link>
          <Link href="/dashboard" className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl">Contact</Link>
          <Link href="/dashboard" className="hover:bg-indigo-500 hover:text-white p-3 rounded-xl">Login</Link>
        </div>
        <div className="mr-9 sm:mr-10">
             <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
        </div>
        {isOpen && (
        <div className="md:hidden flex flex-col mt-6 space-y-2 border-t border-border pt-5 animate-in fade-in slide-in-from-top-4 ml-130">
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl">Home</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl">About</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl">Contact</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;