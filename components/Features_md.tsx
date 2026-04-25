import React from 'react'

import {
  CloudUpload,
  KeyRoundIcon,
  Laptop,
  Lock,
  NotepadText,
  Shield,
} from "lucide-react";

export default function Six_features_md() {
  return (
    <div className="grid grid-flow-row gap-4 sm:grid-flow-col mr-80 sm:mr-10 sm:grid-rows-3 w-80 h-80 items-center sm:gap-4 sm:w-140 sm:h-80 md:w-140 md:h-80 sm:justify-center mt-5 sm:-mt-10 md:mt-4 md:mr-20">
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
              <Shield className="text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature One</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
              <Lock className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Two</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-lg">
              <Lock className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Three</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <KeyRoundIcon className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Four</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <Laptop className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Five</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
          <div className="flex flex-row bg-background text-foreground rounded-xl p-4 border border-gray-400">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 rounded-xl">
              <NotepadText className="border-gray-300 m-2 text-indigo-500 w-6 h-6" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold mb-2">Feature Six</p>
              <p className="text-xs">Short description here.</p>
            </div>
          </div>
        </div>
  )
}
