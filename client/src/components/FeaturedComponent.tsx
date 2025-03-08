import { width } from "@/constants/styles";
import ProductComponent from "./common/ProductComponent";

export default function FeaturedComponent() {
  return (
    <div className={`${width} flex flex-col items-center gap-4`}>
      <h2 className="text-base md:text-xl 2xl:text-2xl text-gray-800 dark:text-gray-300 font-extrabold tracking-[1px]">
        Featured Products
      </h2>

      <div className="w-full flex gap-5 items-center overflow-x-auto">
        <button className="text-base font-extrabold tracking-[1px] shrink-0 cursor-pointer text-gray-800 dark:text-gray-300 border-b-[2px] border-b-orange-500">
          New Arrival
        </button>

        <button className="text-sm font-bold tracking-[1px] shrink-0 cursor-pointer text-gray-700 dark:text-gray-400 border-b-[2px]">
          Best Selling
        </button>

        <button className="text-sm font-bold tracking-[1px] shrink-0 cursor-pointer text-gray-700 dark:text-gray-400 border-b-[2px]">
          Top Rated
        </button>
      </div>
      <div className="w-full flex overflow-x-auto gap-10">
        {Array.from({ length: 10 }, (_, i) => {
          return <ProductComponent key={i} />;
        })}
      </div>
    </div>
  );
}
