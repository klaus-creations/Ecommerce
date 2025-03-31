import { width } from "@/constants/styles";
import ProductComponent from "../common/ProductComponent";
import Heading from "../common/Heading";

export default function BestSelling() {
  return (
    <div className={`${width} flex flex-col items-start gap-4`}>
      <Heading heading="Best Selling Products" />

      <div className="w-full flex overflow-x-auto gap-10">
        {Array.from({ length: 6 }, (_, i) => {
          return (
            <ProductComponent
              showAddTocart={true}
              wrap={false}
              name={`${i + 30}.jpg`}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
