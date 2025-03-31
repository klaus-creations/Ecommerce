import { width } from "@/constants/styles";

import { Button } from "../ui/button";
export default function HeroComponent() {
  return (
    <div
      className={`${width} h-[85vh] overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0`}
    >
      <div className="w-full lg:w-[40%] flex flex-col items-start gap-3">
        <h1 className="text-black dark:text-white ">
          <span className="text-3xl lg:text-4xl 2xl:text-5xl  font-normal mr-3">
            All In One Place
          </span>
          <span className="text-4xl lg:text-4xl 2xl:text-5xl font-extrabold text-primary">
            Happy Shopping
          </span>
        </h1>
        <p className="text-base lg:text-xl tracking-[1px] text-black dark:text-white mb-10">
          Not just a marketplace, but a destination for the best goods!
        </p>

        <Button>Explore More</Button>
      </div>

      <div className="w-full lg:w-[60%] flex justify-center">
        <img className="w-[60%]" alt="hero image" src="/hero1.svg" />
      </div>
    </div>
  );
}

// [#115061]
