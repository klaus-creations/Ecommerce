import { width } from "@/constants/styles";
export default function HeroComponent() {
  return (
    <div
      className={`${width} h-[85vh] overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0`}
    >
      <div className="w-full lg:w-[40%] flex flex-col items-start gap-5">
        <h1 className="text-black dark:text-white ">
          <span className="text-3xl lg:text-4xl 2xl:text-5xl  font-normal mr-3">
            All In One Place
          </span>
          <span className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-orange-500">
            Happy Shopping
          </span>
        </h1>
        <p className="text-base lg:text-xl font-bold tracking-[1px] text-black dark:text-white uppercase">
          Not just a marketplace, but a destination for the best goods!
        </p>

        <button className="text-base lg:text-xl font-extrabold tracking-[1px] bg-orange-500 py-2 px-3 rounded-md text-white cursor-pointer">
          Explore More
        </button>
      </div>

      <div className="w-full lg:w-[60%] flex justify-center">
        <img className="h-full" alt="hero image" src="/hero3.jpg" />
      </div>
    </div>
  );
}
