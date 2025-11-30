
import { usePagination } from "../../features/ui-slices/pagination";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SearchIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CalendarIcon,
  DollarSignIcon,
  TagIcon,
} from "lucide-react";

const PaginationHeader = function () {
  return (
    <div className="size-full flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-secondary/[.05] rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
      <PaginationInput />
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <PaginationOrder />
        <PaginationSortBy />
      </div>
    </div>
  );
};

const PaginationInput = function () {
  const { search, setSearch } = usePagination();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-full md:w-[280px]">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        value={search}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary/[.1]  border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
      />
    </div>
  );
};

const PaginationOrder = function () {
  const { sortOrder, setSort, sortBy } = usePagination();

  const handleChange = (value: "asc" | "desc") => {
    setSort(sortBy, value);
  };

  return (
    <Select value={sortOrder} onValueChange={handleChange}>
      <SelectTrigger className="w-full sm:w-[140px] px-3 py-2 bg-secondary/[.8] dark:bg-secondary/[.6]  text-white border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
        <SelectValue
          placeholder="Order"
          className="flex items-center gap-2"
        />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg">
        <SelectItem value="asc" className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-2">
            <ArrowUpIcon className="h-4 w-4" />
            Ascending
          </div>
        </SelectItem>
        <SelectItem value="desc" className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-2">
            <ArrowDownIcon className="h-4 w-4" />
            Descending
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

const PaginationSortBy = function () {
  const { sortBy, setSort, sortOrder } = usePagination();

  const handleChange = (value: string) => {
    setSort(value, sortOrder);
  };

  const sortOptions = [
    { value: "createdAt", label: "Created At", icon: CalendarIcon },
    { value: "price", label: "Price", icon: DollarSignIcon },
    { value: "name", label: "Name", icon: TagIcon },
  ];

  return (
    <Select value={sortBy} onValueChange={handleChange}>
      <SelectTrigger className="w-full sm:w-[160px] px-3 py-2 bg-secondary/[.8] dark:bg-secondary/[.6]  text-white border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
        <SelectValue
          placeholder="Sort by"
          className="flex items-center gap-2"
        />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg">
        {sortOptions.map(({ value, label, icon: Icon }) => (
          <SelectItem
            key={value}
            value={value}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PaginationHeader;

