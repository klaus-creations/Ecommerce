// NOTE: IMPORTING SHACN COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenLine, SearchIcon, Trash2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// NOTE: IMPORTING THIRD PARTY LIBRARIES

export default function CartTable() {
  return (
    <div className="size-full flex flex-col items-start gap-4">
      <div className="w-full flex flex-col items-start gap-2">
        <div className="w-full flex items-center gap-3 overflow-x-auto">
          <form className="h-10 w-56 lg:w-72 relative shrink-0">
            <Input
              className="size-full outline-none pl-8 text-text2 border-secondary"
              placeholder="Search from cart..."
            />

            <SearchIcon className="size-4 lg:size-5 text-gray-600 dark:text-gray-400 absolute top-[50%] left-2 -translate-y-[50%]" />
          </form>
          <Select>
            <SelectTrigger className="w-[180px] border-[1px] border-secondary h-10 shrink-0 px-2">
              <SelectValue
                className=" text-white"
                placeholder="All Categories"
              />
            </SelectTrigger>
            <SelectContent className=" text-white">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <Button>Clear Cart</Button> */}
      </div>
      <Table className="size-full border-[1px] border-slate-400 dark:border-slate-700 text-gray-700 dark:text-gray-400">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>

            <TableHead className="text-right flex items-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-sm lg:text-base font-bold tracking-[1px]">
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                className="size-14"
                src="/shoe1.png"
                alt="small for admin product list"
              />
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Men's Fashion</TableCell>
            <TableCell>6788</TableCell>

            <TableCell className="text-right flex items-center pt-6 gap-2">
              <Select>
                <SelectTrigger
                  name=""
                  className="font-extrabold text-base lg:text-xl"
                >
                  <SelectValue placeholder="..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <Dialog /> */}
      <CartOverview />
    </div>
  );
}

const CartOverview = function () {
  return (
    <div className="flex flex-col items-center gap-2 p-3 border-[1px] border-slate-400 dark:border-slate-600">
      <h4 className="text-base lg:text-xl font-light tracking-[1px] text-gray900 dark:text-gray-100">
        Cart Total
      </h4>

      <Button className="bg-red-500 hover:bg-red-600 text-sm lg:text-base font-bold tracking-[1px] text-white">
        Clear Cart
      </Button>
    </div>
  );
};
