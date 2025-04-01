// NOTE: IMPORTING SHACN COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Heading from "../common/Heading";

export default function CustomerTable() {
  return (
    <section className="size-full flex flex-col justify-evenly  gap-2">
      <div className="w-full h-[20%] lg:h-[15%] 2xl:h-[13%] flex justify-around flex-col">
        <div className="w-full flex justify-between items-center">
          <Heading heading="Customers List" />
          <Button className="bg-red-600 hover:bg-red-600/90 text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2">
            Remove All
          </Button>
        </div>

        <div className="w-full flex items-center  overflow-auto gap-3">
          <form className="h-10 w-56 lg:w-72 relative shrink-0">
            <Input
              className="size-full outline-none pl-8 text-text2 border-secondary"
              placeholder="Search from cart..."
            />

            <SearchIcon className="size-4 lg:size-5 text-gray-600 dark:text-gray-400 absolute top-[50%] left-2 -translate-y-[50%]" />
          </form>
          <div className="flex flex-col items-start shrink-0">
            <Select>
              <SelectTrigger className="w-[180px] border-[1px] px-2 border-secondary h-10">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="size-full h-[80%] lg:h-[85%] 2xl:h-[87%] overflow-y-auto">
        <TableRowC />
      </div>
    </section>
  );
}

const TableRowC = function () {
  return (
    <Table className="size-full border-[1px] border-secondary relative">
      <TableHeader className="w-full">
        <TableRow>
          <TableHead className="w-[100px]">No.</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Likes</TableHead>
          <TableHead>Reviews</TableHead>
          <TableHead className="text-right flex items-center">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      {Array.from({ length: 20 }, (_, i) => {
        return (
          <TableBody key={i}>
            <TableRow className="">
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Men's Fashion</TableCell>
              <TableCell>6788</TableCell>
              <TableCell>20</TableCell>
              <TableCell>356</TableCell>
              <TableCell>4</TableCell>
              <TableCell className="text-right flex items-center pt-6 gap-2">
                ...
              </TableCell>
            </TableRow>
          </TableBody>
        );
      })}
    </Table>
  );
};
