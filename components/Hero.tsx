import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col pl-20 sm:pl-10 md:items-center md:justify-center md:p-20 bg-slate-50 md:flex-row md:space-x-15">
      {/* Get Started */}
      <div className="my-4 max-w-xl">
        <p className="text-6xl my-4 sm:text-6xl sm:my-4 md:text-4xl font-bold md:my-4 md:max-w-xl">
          Build Something Amazing
        </p>
        <p className="text-[45px] sm:text-[45px] md:text-[22px]">
          Start your journey with our platform.
        </p>
        <button
          type="button"
          className="bg-indigo-500 text-white font-bold p-7 sm:p-5 text-2xl rounded-xl my-5 hover:bg-indigo-500 hover:cursor-pointer sm:text-4xl md:text-xl"
        >
          Get Started
        </button>
      </div>
      {/* Image Component */}
      <div>
        <Image
          src="/Image.png"
          alt="Developer"
          width={800}
          height={600}
          className="w-100 h-60 sm:w-150 sm:h-80 md:w-175 md:h-100"
        />
      </div>
    </div>
  );
}
