import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamburger({ setIsOpen, isOpen, toggle }: Props) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggle}
        className="flex items-center justify-center p-2 hover:cursor-pointer"
      >
        <X
          size={24}
          className={`transition ${isOpen ? "opacity-100 scale-100 h-auto w-auto" : "opacity-0 scale-0 h-0 w-0"}`}
        />

        <Menu
          size={24}
          className={`transition ${isOpen ? "opacity-0 scale-0 h-0 w-0" : "opacity-100 scale-100 h-auto w-auto"}`}
        />
      </button>

      <div
        className={`flex flex-col absolute bg-background right-3.5 top-10 mt-2 border border-gray-400 rounded-xl items-center w-40 transition-all duration-100 origin-top-left ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="p-4 transition-colors hover:text-foreground hover:-translate-y-1 hover:scale-120"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
