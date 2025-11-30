import { width } from "@/constants/styles";
import ProductComponent from "../common/ProductComponent";

export default function PopularProducts() {
  return (
    <div className={`${width} flex flex-col items-center gap-4`}>
      <h2 className="text-base md:text-xl 2xl:text-2xl text-gray-800 dark:text-gray-300 font-extrabold tracking-[1px]">
        Popular Products
      </h2>

      <div className="w-full flex justify-around flex-wrap gap-10">
        {Array.from({ length: 8 }, (_, i) => {
          return (
            <ProductComponent
              showAddTocart={true}
              wrap={true}
              name="hello"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
