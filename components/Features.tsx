import {
  CloudUpload,
  KeyRoundIcon,
  Laptop,
  Lock,
  NotepadText,
  Shield,
} from "lucide-react";

import Features_sm from "./Features_sm";
import Features_md from "./Features_md";

export default function Features() {
  return (
    <div className="border border-gray-200 bg-background text-foreground pt-10 sm:pt-10 sm:pr-100 md:pt-10 md:pr-60">
      <div className="flex flex-col ml-30 md:flex-row md:space-x-20 items-center sm:ml-80">
        {/* Advanced Security Features */}
        <div>
          <p className="text-6xl my-4 font-bold sm:my-4">
            Advanced Security and Features
          </p>
          <p className="text-[28px] sm:text-[30px] md:text-[22px] my-4 sm:max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="grid grid-flow-row gap-4 sm:grid-flow-col sm:grid-rows-3 md:gap-2">
            <button className="flex items-center w-80 h-20 sm:w-60 sm:h-20 md:w-70 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-4xl col-span-2">
              <Lock className="w-15 h-10 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Reliable Data Protection
            </button>
            <button className="flex items-center w-80 h-20 sm:w-60 sm:h-20 md:w-60 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-4xl col-span-2 row-span-2">
              <Shield className="w-15 h-10 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Improved Compliance
            </button>
            <button className="flex items-center w-80 h-20 sm:w-60 sm:h-20 md:w-60 md:h-10 bg-background text-foreground hover:cursor-pointer rounded-4xl">
              <KeyRoundIcon className="w-15 h-10 m-2 sm:w-8 sm:h-8 text-indigo-500" />
              Permission Control
            </button>
          </div>
        </div>
        {/* 6 Features */}
        {/*<Features_sm />*/}
        <Features_md />
      </div>
    </div>
  );
}
