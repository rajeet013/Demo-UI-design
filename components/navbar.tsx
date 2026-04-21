import Link from "next/link";

export default function navbar() {
  return (
    <div className="border border-gray-300 rounded-l p-4 flex flex-col">
      <div>
        <h2 className="text-4xl font-bold mx-20">Logo</h2>
      </div>
      <div>
        <Link
          href="/dashboard"
          className="hover:bg-indigo-500 hover:text-white p-3 rounded-l"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-indigo-500 hover:text-white p-3 rounded-l"
        >
          About
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-indigo-500 hover:text-white p-3 rounded-l"
        >
          Contact
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-indigo-500 hover:text-white p-3 rounded-l"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
