import { KeyRoundIcon, Lock, Shield } from "lucide-react";

import Features_md from "./Features_md";

export default function Features() {
  return (
    <div className="border-t bg-background text-foreground md:border-t-gray-300 md:dark:border-t-gray-600 pt-10 px-6">
      <div className="flex flex-col items-center lg:flex-row max-w-7xl mx-auto gap-10">
        {/* Advanced Security Features */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-2xl my-4 font-bold mb-4">
            Advanced Security and Features
          </p>
          <p className="text-md sm:text-[30px] md:text-[22px] my-4 sm:max-w-xl text-lg mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="flex items-center w-75 h-10 sm:w-60 sm:h-20 md:w-70 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-2xl col-span-2 border">
              <Lock className="w-15 h-7 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Reliable Data Protection
            </button>
            <button className="flex items-center w-75 h-10 sm:w-60 sm:h-20 md:w-60 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-2xl col-span-2 row-span-2 border">
              <Shield className="w-15 h-7 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Improved Compliance
            </button>
            <button className="flex items-center w-75 h-10 sm:w-60 sm:h-20 md:w-60 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-2xl border">
              <KeyRoundIcon className="w-15 h-7 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Permission Control
            </button>
          </div>
        </div>
        {/* 6 Features */}
        {/*<Features_sm />*/}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Features_md />
        </div>
      </div>
    </div>
  );
}
