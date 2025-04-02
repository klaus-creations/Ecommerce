import Heading from "../common/Heading";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

interface ISearchResults {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: string;
  stock: string;
  isOff: boolean;
  offPercent?: number;
}

interface SearchResultsProps {
  results: ISearchResults[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="size-full mt-6 flex flex-col">
      {results.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No products found.</p>
      ) : (
        <div className="w-full flex flex-col items-start gap-4 overflow-y-auto">
          <Heading heading="Results" />
          <div className="w-full flex flex-col items-center gap-3">
            {results.map((product) => (
              <SearchResultDescription key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const SearchResultDescription = ({ product }: { product: ISearchResults }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 shadow-md bg-slate-300/[.3] dark:bg-slate-950/[.2] relative flex items-center justify-around w-full">
      {product.isOff && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
          {product.offPercent}% OFF
        </span>
      )}

      <div className="w-[20%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      </div>

      <div className="w-[76%] flex flex-col items-start gap-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          {product.description}
        </p>

        <div className="flex items-center mt-2">
          <span className="text-primary font-bold text-xl">
            ${product.price}
          </span>
          {product.isOff && (
            <span className="text-gray-500 text-sm line-through ml-2">
              $
              {(product.price / (1 - (product.offPercent || 0) / 100)).toFixed(
                2
              )}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`size-4 ${
                index < parseFloat(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
            {product.rating} Stars
          </span>
        </div>

        <p
          className={`mt-2 text-sm font-medium ${
            product.stock === "In Stock" ? "text-green-600" : "text-red-500"
          }`}
        >
          {product.stock}
        </p>

        <Button className="mt-3">Add to Cart</Button>
      </div>
    </div>
  );
};
