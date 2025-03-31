import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import CartTable from "./CartTable";

export default function Cart() {
  return (
    <div className={`${width} flex flex-col gap-2 items-start py-4 lg:py-8 `}>
      <Heading heading="Cart" />
      <CartTable />
    </div>
  );
}
