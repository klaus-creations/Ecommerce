import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenLine, Trash2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminProducts() {
  return (
    <div className="size-full flex flex-col gap-2">
      <h3 className="text-base lg:text-xl font-extrabold">Products List</h3>
      <div className="w-full flex items-center gap-1 overflow-x-auto">
        <div className="flex flex-col items-start">
          <span className="text-xs lg:text-base font-bold tracking-[1px] text-gray-600 dark:text-gray-400">
            Categories
          </span>
          <Select>
            <SelectTrigger className="w-[180px] border-[1px] bg-orange-500/[.2] dark:bg-orange-500/[.1]">
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
      <Table className="size-full border-[1px] border-orange-500/[.5]">
        <TableHeader></TableHeader>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right flex items-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right flex items-center gap-2">
              <button className="bg-red-600 px-2 py-1 flex items-center gap1 text-white">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  Delete
                </span>
                <Trash2 className="size-4" />
              </button>
              <button className="border-[1px] border-orange-500 px-2 py-1 flex items-center gap-1">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  update
                </span>
                <PenLine className="size-4" />
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right flex items-center gap-2">
              <button className="bg-red-600 px-2 py-1 flex items-center gap1 text-white">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  Delete
                </span>
                <Trash2 className="size-4" />
              </button>
              <button className="border-[1px] border-orange-500 px-2 py-1 flex items-center gap-1">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  update
                </span>
                <PenLine className="size-4" />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
