import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { SearchFilter } from "./SearchFilter";
import { width } from "@/constants/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { Skeleton } from "../ui/skeleton";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "20.jpg",
    description: "High-quality wireless headphones with noise cancellation.",
    rating: "4.5",
    stock: "In Stock",
    isOff: true,
    offPercent: 15,
  },
  {
    id: "2",
    name: "Smartphone X",
    price: 799.99,
    image: "21.jpg",
    description: "Latest generation smartphone with an advanced camera system.",
    rating: "4.7",
    stock: "In Stock",
    isOff: true,
    offPercent: 10,
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 49.99,
    image: "22.jpg",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    rating: "4.2",
    stock: "In Stock",
    isOff: false,
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "23.jpg",
    description: "RGB mechanical keyboard with blue switches.",
    rating: "4.6",
    stock: "In Stock",
    isOff: true,
    offPercent: 20,
  },
  {
    id: "5",
    name: "Smartwatch Pro",
    price: 199.99,
    image: "24.jpg",
    description: "Feature-packed smartwatch with health tracking.",
    rating: "4.3",
    stock: "Out of Stock",
    isOff: false,
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "25.jpg",
    description: "Portable Bluetooth speaker with deep bass.",
    rating: "4.4",
    stock: "In Stock",
    isOff: true,
    offPercent: 12,
  },
  {
    id: "7",
    name: "4K Smart TV",
    price: 999.99,
    image: "26.jpg",
    description: "Ultra HD 4K Smart TV with HDR and voice control.",
    rating: "4.8",
    stock: "In Stock",
    isOff: false,
  },
  {
    id: "8",
    name: "DSLR Camera",
    price: 599.99,
    image: "27.jpg",
    description: "Professional DSLR camera with 24MP sensor.",
    rating: "4.6",
    stock: "In Stock",
    isOff: true,
    offPercent: 18,
  },
  {
    id: "9",
    name: "Wireless Earbuds",
    price: 89.99,
    image: "28.jpg",
    description: "Truly wireless earbuds with active noise cancellation.",
    rating: "4.5",
    stock: "In Stock",
    isOff: false,
  },
  {
    id: "10",
    name: "Gaming Laptop",
    price: 1499.99,
    image: "29.jpg",
    description: "High-performance gaming laptop with RTX graphics.",
    rating: "4.9",
    stock: "Out of Stock",
    isOff: true,
    offPercent: 10,
  },
  {
    id: "11",
    name: "Fitness Tracker",
    price: 79.99,
    image: "30.jpg",
    description: "Track your steps, heart rate, and workouts.",
    rating: "4.3",
    stock: "In Stock",
    isOff: false,
  },
  {
    id: "12",
    name: "Portable Hard Drive",
    price: 120.99,
    image: "31.jpg",
    description: "1TB external hard drive for secure data storage.",
    rating: "4.6",
    stock: "In Stock",
    isOff: true,
    offPercent: 15,
  },
  {
    id: "13",
    name: "Electric Scooter",
    price: 499.99,
    image: "32.jpg",
    description: "Foldable electric scooter with 25km range.",
    rating: "4.5",
    stock: "In Stock",
    isOff: true,
    offPercent: 25,
  },
  {
    id: "14",
    name: "Gaming Console",
    price: 399.99,
    image: "33.jpg",
    description: "Next-gen gaming console with 8K support.",
    rating: "4.8",
    stock: "Out of Stock",
    isOff: false,
  },
  {
    id: "15",
    name: "VR Headset",
    price: 299.99,
    image: "34.jpg",
    description: "Immersive VR experience with motion tracking.",
    rating: "4.7",
    stock: "In Stock",
    isOff: true,
    offPercent: 30,
  },
];

export default function Search() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");
  const [globalSearchValue, setGlobalSearch] = useState(searchTerm || "");

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleSearch = function (e) {
    e.preventDefault();
    if (globalSearchValue.length > 0)
      navigate(`/search?query=${globalSearchValue}`);
    navigate("/search");
  };
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className={`${width} h-full`}>
      <div className="w-full h-[15%] flex gap-3 border-b-[1px] border-b-gray-300 dark:border-b-gray-600  flex-col justify-evenly items-start rounded-md">
        <SearchFilter />
        <form
          className="w-[95%] lg:w-[60%] 2xl:w-[40%] h-12 relative"
          onSubmit={handleSearch}
        >
          <SearchIcon className="absolute top-[50%] -translate-y-[50%] left-2 text-gray-700 dark:text-gray-400 size-5" />
          <input
            value={globalSearchValue}
            onChange={(e) => setGlobalSearch(e.target.value)}
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

      <div className="w-full  bg h-[85%] flex items-center justify-center">
        {loading ? (
          <div className="size-full flex flex-col justify-around items-center ">
            <Skeleton className="w-full h-[13%]" />
            <Skeleton className="w-full h-[70%]" />
            <Skeleton className="w-full h-[14%]" />
          </div>
        ) : (
          <SearchResults results={products} />
        )}
        {/* <p className="text-xl lg:text-2xl">Search Result</p> */}
      </div>
    </div>
  );
}
