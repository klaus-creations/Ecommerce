// NOTE: IMPORTING SHACN COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenLine, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { productValidations } from "@/validations";

// NOTE: IMPORTING THIRD PARTY LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AdminProducts() {
  return (
    <div className="size-full flex flex-col gap-2">
      <h3 className="text-base lg:text-xl font-extrabold">Products List</h3>
      <div className="w-full flex items-center justify-between">
        <div className="w-[70%] md:w-[80%] xl:w-[90%] flex items-center justify-between">
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
        <DialogC />
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-orange-500 text-white hover:bg-orange-500/[.8]"
            >
              Add Product
            </Button>
          </DialogTrigger>
        </Dialog> */}
      </div>
      <Table className="size-full border-[1px] border-orange-500/[.5]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product Name</TableHead>
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
        <TableBody>
          <TableRow className="">
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
            <TableCell>20</TableCell>
            <TableCell>356</TableCell>
            <TableCell>4</TableCell>
            <TableCell className="text-right flex items-center pt-6 gap-2">
              <button className="bg-red-600 px-2 py-1 flex items-center gap1 text-white rounded-sm">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  Delete
                </span>
                <Trash2 className="size-4" />
              </button>
              <button className="border-[1px] border-orange-500 px-2 py-1 flex items-center gap-1 rounded-sm">
                <span className="text-sm lg:text-xs font-bold tracking-[1px]">
                  update
                </span>
                <PenLine className="size-4" />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <Dialog /> */}
    </div>
  );
}

interface ITableRow {
  number: number;
  image: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  likes: number;
  reviews: number;
}

const TableRowC = function () {};

const DialogC = function () {
  type SignupFormType = z.infer<typeof productValidations>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    resolver: zodResolver(productValidations),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      discountedPrice: undefined,
      stock: 0,
      category: "",
      images: [""],
      ratings: 0,
      reviews: [],
      likes: 0,
      likedBy: [],
    },
    mode: "onBlur",
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-orange-500 text-white hover:bg-orange-500/[.8] hover:text-white outline-none"
        >
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <input
              {...register("name")}
              type="text"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Product Name"
            />
            {errors["name"] && (
              <span className="text-sm text-red-500">
                {errors["name"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <textarea
              {...register("description")}
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Description"
            />
            {errors["description"] && (
              <span className="text-sm text-red-500">
                {errors["description"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("price")}
              type="number"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Price"
            />
            {errors["price"] && (
              <span className="text-sm text-red-500">
                {errors["price"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("discountedPrice")}
              type="number"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Discounted Price"
            />
            {errors["discountedPrice"] && (
              <span className="text-sm text-red-500">
                {errors["discountedPrice"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("stock")}
              type="number"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Stock"
            />
            {errors["stock"] && (
              <span className="text-sm text-red-500">
                {errors["stock"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("category")}
              type="text"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Category ID"
            />
            {errors["category"] && (
              <span className="text-sm text-red-500">
                {errors["category"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("images.0")}
              type="file"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
            />
            {errors["images"] && (
              <span className="text-sm text-red-500">
                {errors["images"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("ratings")}
              type="number"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Ratings (0-5)"
            />
            {errors["ratings"] && (
              <span className="text-sm text-red-500">
                {errors["ratings"]?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("likes")}
              type="number"
              className="w-full border-[1px] border-orange-500/[.5] shadow-md shadow-orange-500/[.1] rounded-sm outline-none px-3 py-1"
              placeholder="Likes"
            />
            {errors["likes"] && (
              <span className="text-sm text-red-500">
                {errors["likes"]?.message}
              </span>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-orange-500 hover:bg-orange-500/[.9] text-white"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
