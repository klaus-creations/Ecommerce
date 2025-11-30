
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import Rating from "./Rating";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "../ui/button";

interface IProduct {
  name: string;
  wrap: boolean;
  showAddTocart: boolean;
}

export default function ProductComponent({ name, wrap, showAddTocart }: IProduct) {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border
        border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300
        hover:shadow-2xl hover:-translate-y-1 group
        ${wrap ? "w-[45%] lg:w-[23%]" : "w-72 lg:w-96"} flex-shrink-0`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {loaded ? (
        <>
          {/* Product Image Section */}
          <div className={`w-full ${wrap ? "h-48 lg:h-56" : "h-64 lg:h-80"} relative`}>
            <img
              src={`/${name}`}
              alt="Product Image"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-500 ease-in-out
                ${isHovered ? "scale-105" : "scale-100"}`}
            />

            {/* Floating Action Buttons */}
            <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ease-in-out
              ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to wishlist"
                className={`p-2 rounded-full backdrop-blur-sm
                  ${isWishlisted ? "bg-rose-500 text-white" : "bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white"}`}
              >
                <Heart className={`size-4 ${isWishlisted ? "fill-current" : ""}`} />
              </button>
              <button
                aria-label="View details"
                className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white backdrop-blur-sm"
              >
                <Eye className="size-4" />
              </button>
            </div>

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              30% OFF
            </div>

            {/* Hover Add to Cart Button (floating) */}
            {!showAddTocart && (
              <button
                aria-label="Add to cart"
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600
                  text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-2
                  transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <ShoppingCart className="size-4" />
                Add to Cart
              </button>
            )}
          </div>

          {/* Product Info Section */}
          <div className={`w-full p-4 flex flex-col ${wrap ? "gap-2" : "gap-3"}`}>
            <div className="flex justify-between items-start">
              <h3 className={`font-bold text-gray-900 dark:text-white line-clamp-2 ${wrap ? "text-sm" : "text-base"}`}>
                Premium Wireless Noise-Canceling Headphones
              </h3>
              {!wrap && (
                <Rating rating={5} starSize={14} />
              )}
            </div>

            {wrap && (
              <div className="flex items-center">
                <Rating rating={5} starSize={12} />
                <span className="text-xs text-gray-500 ml-1">(30)</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <span className={`text-primary font-bold ${wrap ? "text-base" : "text-lg"}`}>
                $3,000
              </span>
              <span className={`line-through text-gray-400 ${wrap ? "text-xs" : "text-sm"}`}>
                $4,300
              </span>
            </div>

            {/* Main Add to Cart Button */}
            {showAddTocart && (
              <Button
                className={`mt-2 w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90
                  text-white font-medium transition-all duration-300 rounded-full shadow-md
                  ${isHovered ? "shadow-lg" : ""}`}
              >
                <ShoppingCart className="size-4 mr-2" />
                Add to Cart
              </Button>
            )}
          </div>
        </>
      ) : (
        <Skeleton
          className={`w-full ${wrap ? "h-[200px] lg:h-[224px]" : "h-64 lg:h-80"} rounded-2xl`}
        />
      )}
    </div>
  );
}

