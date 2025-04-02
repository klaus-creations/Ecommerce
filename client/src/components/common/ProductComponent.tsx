import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Rating from "./Rating";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

interface IProduct {
  name: string;
  wrap: boolean;
  showAddTocart: boolean;
}

export default function ProductComponent({
  name,
  wrap,
  showAddTocart,
}: IProduct) {
  const [something, setSomething] = useState(false);
  setTimeout(() => {
    setSomething(true);
  }, 5000);
  return (
    <div
      className={` flex flex-col items-start shrink-0 shadow-md rounded-xl bg-slate-300/[.3] dark:bg-slate-950/[.2] overflow-hidden 
        p-2 lg:p-4  ${
          wrap
            ? "w-[45%] lg:w-[23%] h-[350px] lg:h-[400px]"
            : "w-72 h-[420px] lg:w-96 lg:h-[500px]"
        }`}
    >
      {something ? (
        <>
          <div className="w-full h-[70%] object-contain overflow-hidden relative">
            <img
              className="size-full bg-cover hover:scale-[1.2] duration-300"
              src={`/${name}`}
              alt="Product"
            />

            {!showAddTocart && (
              <div className="absolute left-[50%] -translate-x-[50%] bottom-2 flex items-center justify-between">
                <Button className="bg-gray-50 hover:bg-transparent px-0 py-0 lg:px-0 lg:py-0">
                  <ShoppingCart className="size-5 lg:size-6 text-primary" />
                </Button>
              </div>
            )}
          </div>

          <div className="w-full h-[30%] flex flex-col justify-between p-2 overflow-y-auto">
            <span className="text-base font-extrabold tracking-[1px] dark:text-gray-300 text-gray-800">
              Title
            </span>

            <div className="flex gap-5 items-center">
              <Rating rating={5} />
              <span className="text-base dark:text-gray-400 text-gray-700">
                (30)
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-sm line-through font-bold tracking-[1px] dark:text-gray-400 text-gray-700">
                4,300$
              </span>
              <span className="text-base font-extrabold tracking-[1px] text-primary/90">
                3,000$
              </span>
            </div>

            {showAddTocart && (
              <Button className="flex items-center gap-3">
                <span className="text-base font-bold tracking-[1px] ">
                  Add To Cart
                </span>
                <ShoppingCart className="size-5" />
              </Button>
            )}
          </div>
        </>
      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </div>
  );
}
