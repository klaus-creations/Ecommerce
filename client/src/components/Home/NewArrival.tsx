import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import ProductComponent from "../common/ProductComponent";

export default function NewArrivals() {
  return (
    <div
      className={`${width} w-full flex flex-col gap-2 items-start text-gray-900 dark:text-gray-100`}
    >
      <Heading heading="New Arrival" />
      <h3 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-gray-950 dark:text-gray-50">
        Our <strong className="text-primary">Latest</strong> Products
      </h3>
      <CategoryProducts />
    </div>
  );
}

const CategoryProducts = function () {
  return (
    <div className="w-full flex gap-4 items-start flex-wrap">
      {Array.from({ length: 8 }, (_, i) => {
        return (
          <ProductComponent
            showAddTocart={false}
            wrap={true}
            name={`${i + 36}.jpg`}
            key={i}
          />
        );
      })}
    </div>
  );
};
