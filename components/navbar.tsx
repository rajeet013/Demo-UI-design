import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center border border-gray-200 bg-white rounded-xl p-8">
      <div className="flex flex-row justify-between space-x-180">
        <h2 className="text-4xl font-bold pr-6">Logo</h2>
        <div className="justify-center space-x-9 mt-2">
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
