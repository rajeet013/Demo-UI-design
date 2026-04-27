import { SecurityItems } from "@/constants";
import Features_md from "./Features_md";
import Security from "./Security";

export default function Features() {
  return (
    <div className="border-t bg-background text-foreground md:border-t-gray-300 md:dark:border-t-gray-600 px-6 pt-6">
      <div className="flex flex-col items-center lg:flex-row max-w-7xl mx-auto gap-3">
        {/* Advanced Security Features */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-2xl my-4 font-bold mb-4">
            Advanced Security and Features
          </p>
          <p className="text-md sm:text-[30px] md:text-[22px] sm:max-w-xl text-lg mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-5">
            {SecurityItems.map((item) => (
              <Security key={item.title} item={item} />
            ))}
          </div>
        </div>
        {/* 6 Features */}
        {/*<Features_sm />*/}
        <div className="w-full lg:w-1/2 flex justify-center  lg:justify-end gap-5">
          <Features_md />
        </div>
      </div>
    </div>
  );
}
