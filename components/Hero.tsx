import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center justify-center p-4 bg-slate-50 py-12">
      {/* Get Started */}
      <div className="my-4 max-w-xl">
        <p className="text-4xl font-bold my-4 max-w-xl">
          Build Something Amazing
        </p>
        <p className="text-[22px]">Start your journey with our platform.</p>
        <button
          type="button"
          className="bg-indigo-500 text-white font-bold p-3 rounded-xl my-5 hover:bg-indigo-500 hover:cursor-pointer"
        >
          Get Started
        </button>
      </div>
      {/* Image Component */}
      <div>
        <Image src="/Image.png" alt="Developer" width={800} height={600} />
      </div>
    </div>
  );
}
