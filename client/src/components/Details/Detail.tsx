import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import Rating from "../common/Rating";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import ProductReview from "./ProductReviews";
import AddReview from "./AddReview";
import { useQuery } from "@tanstack/react-query";

import {getProductById} from "@/features/requests/product.request"
export default function Detail() {
const { data, isLoading, error } = useQuery({
  queryKey: ["product", "123"], // Replace "123" with actual product ID
  queryFn: getProductById,
});
  return (
    <section
      className={`${width} flex flex-col items-center lg:items-start py-8 lg:py-12`}
    >
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <ProductDetails />
        <ProductImages />
      </div>
      <ProductReview />
      <AddReview />
    </section>
  );
}

const ProductImages = function () {
  return (
    <div className="w-full lg:w-[45%] flex flex-col items-center gap-5 bg-slate-300 dark:bg-slate-900 p-3">
      <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[500px] 2xl:h-[540px] ">
        <img src="/35.jpg" alt="product" className="size-full object-contain" />
      </div>

      <div className="w-full flex gap-4 items-center overflow-x-auto ">
        {Array.from({ length: 7 }, (_, i) => {
          return (
            <div
              key={i}
              className={`size-24 lg:size-28 shrink-0 overflow-hidden rounded-lg border-orange-500 ${
                i === 0 ? "border-[3px]" : "border-[1px] border-orange-500/[.5]"
              }`}
            >
              <img
                src={`/${i + 20}.jpg`}
                alt="product"
                className="size-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProductDetails = function () {
  return (
    <div className="w-full lg:w-[53%] flex flex-col items-start gap-3">
      <Heading heading="Home Pet" />
      <Rating rating={4} />
      <div className="w-full flex flex-col gap-2 items-start">
        <h3 className="text-sm lg:text-base font-extrabold tracking-[1px] text-gray-800 dark:text-gray-200">
          Hello world
        </h3>
        <p className="text-gray-800 dark:text-gray-300 font-light tracking-[1px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          neque quos praesentium impedit in qui, odio debitis non iusto ad quas
          dolorum dolore maiores, aliquam consectetur unde excepturi pariatur
          consequuntur?
        </p>

        <div className="w-full flex justify-between">
          <Button className="bg-transparent hover:bg-transparent p-0">
            {2 > 1 ? (
              <img src="/heart.svg" alt="heart" className="size-6 lg:size-8" />
            ) : (
              <img src="/heart-full.svg" className="size-6 lg:size-8" />
            )}
          </Button>

          <Button>
            <span>Add To Cart</span>
            <ShoppingCart className="size-5 lg:size-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};
