"use client";

import { navLinks } from "@/constants";
import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 border-b border-gray-400 md:p-4 md:items-center md:border-b md:border-b-gray-300 md:dark:border-b-gray-600 mb-10">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto md:justify-between">
        <div className="text-2xl font-bold xl:text-2xl">
          <h2>Logo</h2>
        </div>
        <div className="flex items-center md:gap-5">
          <div className="hover:cursor-pointer">
            <ThemeSwitch />
          </div>
          <div className="">
            <Hamburger
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              setIsOpen={setIsOpen}
            />
          </div>

          <div>
            <div className="md:space-x-9 hidden md:block">
              {navLinks.map((item) => (
                <NavLink
                  key={item.title}
                  {...{
                    item,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
