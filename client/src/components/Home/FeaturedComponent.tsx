import { width } from "@/constants/styles";
import ProductComponent from "../common/ProductComponent";
import Heading from "../common/Heading";

export default function FeaturedComponent() {
  return (
    <div className={`${width} flex flex-col items-start gap-4`}>
      <Heading heading="Featured Products" />
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
          return (
            <ProductComponent
              showAddTocart={true}
              wrap={false}
              name={`${i + 1}.jpg`}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
