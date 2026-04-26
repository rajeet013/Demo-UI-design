import { Menu, X } from "lucide-react";
import Link from "next/link";

interface Props {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  toggle: () => void;
}

export default function Hamburger({ setIsOpen, isOpen, toggle }: Props) {
  // Use 'toggle' here
  return (
    <div className="md:hidden">
      <button onClick={toggle} className="p-2 hover:cursor-pointer">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-6 space-y-2 border-t border-border pt-5">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl"
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:bg-indigo-500 hover:text-white p-4 rounded-xl"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
