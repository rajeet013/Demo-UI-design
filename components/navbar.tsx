import Link from "next/link";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-9 md:p-8 md:items-center md:border md:border-gray-200">
      <div className="flex flex-row justify-between md:space-x-180">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold ml-10 md:pr-6">
          Logo
        </h2>
        <Hamburger />
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
