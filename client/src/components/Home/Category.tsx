/* eslint-disable @typescript-eslint/no-unused-vars */
import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import ProductComponent from "../common/ProductComponent";

// NOTE: SHADCN UI
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";

const exampleFilters = [
  {
    category: "Electronics",
    subcategories: [
      "Mobile Phones",
      "Laptops",
      "Tablets",
      "Cameras",
      "Accessories",
    ],
  },
  {
    category: "Men's Fashion",
    subcategories: [
      "Clothing",
      "Shoes",
      "Watches",
      "Accessories",
      "Sunglasses",
    ],
  },
  {
    category: "Women's Fashion",
    subcategories: ["Clothing", "Shoes", "Bags", "Jewelry", "Beauty Products"],
  },
  {
    category: "Home & Kitchen",
    subcategories: ["Furniture", "Appliances", "Décor", "Cookware", "Storage"],
  },
  {
    category: "Sports & Outdoors",
    subcategories: [
      "Fitness",
      "Camping",
      "Cycling",
      "Sportswear",
      "Hiking Gear",
    ],
  },
  {
    category: "Health & Beauty",
    subcategories: ["Skincare", "Haircare", "Makeup", "Fragrances", "Wellness"],
  },
  {
    category: "Automotive",
    subcategories: [
      "Car Accessories",
      "Motorcycle Gear",
      "Tires",
      "Car Electronics",
      "Maintenance",
    ],
  },
  {
    category: "Toys & Games",
    subcategories: [
      "Board Games",
      "Dolls",
      "Building Blocks",
      "Outdoor Toys",
      "Educational Toys",
    ],
  },
  {
    category: "Books & Stationery",
    subcategories: [
      "Fiction",
      "Non-Fiction",
      "Comics",
      "School Supplies",
      "Office Supplies",
    ],
  },
  {
    category: "Groceries & Food",
    subcategories: [
      "Snacks",
      "Beverages",
      "Dairy Products",
      "Bakery",
      "Organic Foods",
    ],
  },
];

export default function Category() {
  return (
    <div
      className={`${width} w-full flex flex-col gap-2 items-start text-gray-900 dark:text-gray-100`}
    >
      <Heading heading="Browse By Category" />
      <CategoryFilter />
      <CategoryProducts />
      <PaginationC />
    </div>
  );
}

const CategoryFilter = function () {
  return (
    <div className="w-full flex items-center py-2 px-4 overflow-x-auto gap-3">
      {exampleFilters.map(function (el, i) {
        return (
          <Button variant={i == 0 ? "default" : "outline"} key={i}>
            {el.category}
          </Button>
        );
      })}
    </div>
  );
};

const CategoryProducts = function () {
  return (
    <div className="w-full flex gap-4 items-start flex-wrap">
      {Array.from({ length: 8 }, (_, i) => {
        return (
          <ProductComponent
            showAddTocart={false}
            wrap={true}
            name={`${i + 30}.jpg`}
            key={i}
          />
        );
      })}
    </div>
  );
};

const PaginationC = function () {
  return (
    <div className="w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
