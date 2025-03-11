import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="size-full text-gray-800 dark:text-gray-100">
      <div className="w-full h-[10%] flex gap-3 shadow-md shadow-orange-500/[.2] flex-col items-start md:items-center md:flex-row pl-2 rounded-md">
        <button>products</button>
        <form className="w-[95%] sm:w-[90%] md:w-[80%] xl:w-[60%] 2xl:w-[40%] h-[40%] rounded-lg relative">
          <input
            type="text"
            placeholder="Search here . . ."
            className="size-full outline-none border-[1px] border-orange-500/[.5] rounded-lg pl-2 pr-32"
          />
          <button
            type="button"
            className="flex items-center gap-1 bg-orange-500 text-gray-100 absolute top-[50%] -translate-y-[50%] right-1 px-1 rounded-md"
          >
            <span className="text-xs lg:text-base font-bold">Search</span>
            <SearchIcon className="size-4" />
          </button>
        </form>
      </div>

      {/* Search Place */}
      <div className="w-full h-[90%] flex items-center justify-center">
        <p className="text-xl lg:text-2xl">Search Result</p>
      </div>
    </div>
  );
}
