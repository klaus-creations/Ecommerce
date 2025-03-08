import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Rating from "./Rating";
import { ShoppingCart } from "lucide-react";

export default function ProductComponent() {
  const [something, setSomething] = useState(false);
  setTimeout(() => {
    setSomething(true);
  }, 5000);
  return (
    <div
      className="w-96 h-[500px] flex flex-col shrink-0 border-[1px] border-orange-500/[.4] rounded-xl shadow-lg 
    shadow-orange-500/[.4] bg-slate-300 dark:bg-slate-950/[.2]"
    >
      {something ? (
        <>
          <div className="w-full h-[70%] object-contain ">
            <img
              className="size-full bg-cover"
              src="/shoe2.png"
              alt="Product"
            />
          </div>

          <div className="w-full h-[30%] flex flex-col justify-between p-2">
            <div className="flex flex-col items-start">
              <span className="text-base font-extrabold tracking-[1px] dark:text-gray-300 text-gray-800">
                Title
              </span>

              <span className="text-base font-bold tracking-[1px] dark:text-gray-400 text-gray-700">
                Little Description
              </span>
            </div>
            <div className="flex gap-5 items-center">
              <Rating rating={5} />
              <span className="text-base dark:text-gray-400 text-gray-700">
                (30)
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-base font-extrabold tracking-[1px] dark:text-gray-300 text-gray-800">
                3,000$
              </span>

              <span className="text-sm line-through font-bold tracking-[1px] dark:text-gray-400 text-gray-700">
                4,300$
              </span>
            </div>

            <div className="w-full flex justify-between items-center">
              <button className="text-base font-bold flex gap-3 items-center text-gray-300 px-2 py-1  bg-orange-600 cursor-pointer">
                <span className="text-base font-bold tracking-[1px] ">
                  Add To Cart
                </span>
                <ShoppingCart className="size-5" />
              </button>

              <button className="">
                {false ? (
                  <img
                    src="/heart-full.svg"
                    alt="favorite heart"
                    className="size-6 cursor-pointer"
                  />
                ) : (
                  <img
                    src="/heart.svg"
                    alt="favorite heart"
                    className="size-6 cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </div>
  );
}
