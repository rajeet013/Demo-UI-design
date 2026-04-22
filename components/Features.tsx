import {
  CloudUpload,
  KeyRoundIcon,
  Laptop,
  Lock,
  NotepadText,
  Shield,
} from "lucide-react";

export default function Features() {
  return (
    <div className="flex border border-gray-200 bg-slate-50 py-12">
      <div className="flex flex-row justify-between ml-100">
        <div>
          <p className="text-2xl font-bold my-4">Advanced Security Features</p>
          <p className="text-[22px] my-4 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="grid grid-flow-col grid-rows-3 gap-2">
            <button className="flex items-center w-70 h-10 bg-white hover:cursor-pointer rounded-4xl col-span-2">
              <Lock className="m-2 text-indigo-500" /> Reliable Data Protection
            </button>
            <button className="flex items-center w-60 h-10 bg-white hover:cursor-pointer rounded-4xl col-span-2 row-span-2">
              <Shield className="m-2 text-indigo-500" /> Improved Compliance
            </button>
            <button className="flex items-center w-60 h-10 bg-white hover:cursor-pointer rounded-4xl">
              <KeyRoundIcon className="m-2 text-indigo-500" /> Permission
              Control
            </button>
          </div>
        </div>
        {/* 6 Features */}
        <div className="grid grid-flow-col grid-rows-3 gap-4 w-140 h-80 items-center justify-center">
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
              <Shield className="text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature One</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
              <Lock className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Three</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl ">
              <CloudUpload className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Five</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <KeyRoundIcon className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Two</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <Laptop className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Four</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-xl p-8 h-25">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <NotepadText className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Six</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
