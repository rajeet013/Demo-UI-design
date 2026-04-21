import { KeyRoundIcon, Lock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="">
      {/* Navbar */}
      <div className="border border-gray-300 rounded-l p-5 flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="text-4xl font-bold px-30">Logo</h2>
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
      </div>
      {/* Hero */}
      <div className="flex items-center justify-center content-center border border-gray-300 rounded-1 p-5 bg-gray-100">
        {/* Get Started */}
        <div>
          <p className="text-4xl font-bold">Build Something Amazing</p>
          <p className="text-[22px]">Start your journey with our platform.</p>
          <button
            type="submit"
            className="bg-indigo-500 text-white font-bold p-3 rounded-1 my-5 hover:bg-indigo-500 hover:cursor-pointer"
          >
            Get Started
          </button>
        </div>
        {/* Image Component */}
        <div>
          <Image
            src="/Image.png"
            alt="Developer"
            width={1000}
            height={1200}
            className=""
          />
        </div>
      </div>
      {/* Features */}
      <div className="flex items-center justify-center content-center rounded-1 p-5 bg-gray-100">
        <div>
          <p className="text-4xl font-bold my-4">Advanced Security Features</p>
          <p className="text-[22px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>sed
            do eiusmod tempor incididunt ut labore et dolore magna <br></br>
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <button className="flex items-center w-70 h-10 bg-white hover:cursor-pointer rounded-2xl col-span-2">
              <Lock className="m-2 text-indigo-500" /> Reliable Data Protection
            </button>
            <button className="flex items-center w-70 h-10 bg-white hover:cursor-pointer rounded-2xl col-span-2 row-span-2">
              <KeyRoundIcon className="m-2 text-indigo-500" /> Improved
              Compliance
            </button>
            <button className="flex items-center w-70 h-10 bg-white hover:cursor-pointer rounded-2xl">
              <Shield className="m-2 text-indigo-500" /> Permission Control
            </button>
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div>Feature 1</div>
            <div>Feature 2</div>
            <div>Feature 3</div>
            <div>Feature 4</div>
            <div>Feature 5</div>
            <div>Feature 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}
