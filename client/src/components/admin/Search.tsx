import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Search() {
  return (
    <div className="size-full text-gray-800 dark:text-gray-100">
      <div className="w-full h-[10%] flex gap-3 shadow-md  flex-col items-start rounded-md">
        <button>products</button>
        <form className="w-[95%] lg:w-[60%] 2xl:w-[40%] h-12 relative">
          <SearchIcon className="absolute top-[50%] -translate-y-[50%] left-2 text-gray-700 dark:text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full h-full outline-none border-[1px] border-secondary rounded-4 pl-8 pr-10 rounded-lg"
          />

          <Button
            type="submit"
            className="absolute top-[50%] -translate-y-[50%] right-0"
          >
            Search
          </Button>
        </form>
      </div>

      {/* Search Place */}
      <div className="w-full h-[90%] flex items-center justify-center">
        <p className="text-xl lg:text-2xl">Search Result</p>
      </div>
    </div>
  );
}
