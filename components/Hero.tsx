import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-8">
      {/* Get Started */}
      <div className="text-center md:text-left">
        <p className="text-4xl md:text-6xl font-bold">
          Build Something Amazing
        </p>
        <p className="text-lg md:text-xl sm:mr-40 mt-3">
          Start your journey with our platform.
        </p>
        <button
          type="button"
          className="bg-indigo-500 text-white font-bold p-4 sm:p-3 text-2xl rounded-xl my-5 hover:bg-indigo-500 hover:cursor-pointer sm:text-xl md:text-xl sm:mr-80"
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
          className="w-80 h-60 sm:w-150 sm:h-80 md:w-175 md:h-100"
        />
      </div>
    </div>
  );
}
