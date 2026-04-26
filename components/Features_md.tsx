import { KeyRoundIcon, Laptop, Lock, NotepadText, Shield } from "lucide-react";

export default function Six_features_md() {
  return (
    <div className="grid grid-cols-2 gap-4 w-80 h-80 items-center sm:gap-4 sm:w-140 sm:h-80 md:w-140 md:h-80 sm:justify-center mt-5 sm:-mt-10 md:-mt-10 md:mr-40 md:p-1">
      <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-border">
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-lg">
          <Shield className="text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature One</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
      <div
        className="flex flex-row 
bg-background text-foreground 
rounded-xl p-4 border border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-lg">
          <Lock className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature Two</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
      <div
        className="flex flex-row 
bg-background text-foreground 
rounded-xl p-4 border border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-lg">
          <Lock className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature Three</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
      <div
        className="flex flex-row 
bg-background text-foreground 
rounded-xl p-4 border border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-xl">
          <KeyRoundIcon className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature Four</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
      <div
        className="flex flex-row 
bg-background text-foreground 
rounded-xl p-4 border border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-xl">
          <Laptop className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature Five</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
      <div
        className="flex flex-row 
bg-background text-foreground
rounded-xl p-4 border border-border"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-xl">
          <NotepadText className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
        </div>
        <div className="ml-2">
          <p className="text-xl font-bold mb-2">Feature Six</p>
          <p className="text-xs">Short description here.</p>
        </div>
      </div>
    </div>
  );
}
