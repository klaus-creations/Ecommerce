// NOTE: IMPORTING SHACN COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, SearchIcon } from "lucide-react";
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
import Heading from "../common/Heading";

export default function AdminProducts() {
  return (
    <section className="size-full flex flex-col justify-evenly  gap-2">
      <div className="w-full h-[20%] lg:h-[15%] 2xl:h-[13%] flex justify-around flex-col">
        <div className="w-full flex justify-between items-center">
          <Heading heading="Products List" />
          <DialogC />
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
      {Array.from({ length: 20 }, (_, i) => {
        return (
          <TableBody key={i}>
            <TableRow className="">
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                <img
                  className="size-14"
                  src={`/${i + 20}.jpg`}
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
                ...
              </TableCell>
            </TableRow>
          </TableBody>
        );
      })}
    </Table>
  );
};

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
      price: undefined,
      discountedPrice: undefined,
      stock: undefined,
      category: "",
      images: [""],
      ratings: undefined,
      reviews: [],
      likes: undefined,
      likedBy: [],
    },
    mode: "onBlur",
  });

  const onSubmit = async function () {
    console.log("Hello world");
  };

  return (
    <Dialog>
      <DialogTrigger className="shrink-0" asChild>
        <Button className="flex items-center gap-1 text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2">
          <span>Product</span>
          <Plus className="text-gray-50 size-4 lg:size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex flex-col items-start">
            <input
              {...register("name")}
              type="text"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Product Name"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <textarea
              {...register("description")}
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Description"
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("price")}
              type="number"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Price"
            />
            {errors.price && (
              <span className="text-sm text-red-500">
                {errors.price?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("discountedPrice")}
              type="number"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Discounted Price"
            />
            {errors.discountedPrice && (
              <span className="text-sm text-red-500">
                {errors.discountedPrice?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("stock")}
              type="number"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Stock"
            />
            {errors.stock && (
              <span className="text-sm text-red-500">
                {errors.stock?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("category")}
              type="text"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Category ID"
            />
            {errors.category && (
              <span className="text-sm text-red-500">
                {errors.category?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("images.0")}
              type="file"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
            />
            {errors.images && (
              <span className="text-sm text-red-500">
                {errors.images?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("ratings")}
              type="number"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Ratings (0-5)"
            />
            {errors.ratings && (
              <span className="text-sm text-red-500">
                {errors.ratings?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("likes")}
              type="number"
              className="w-full border-[1px] border-secondary shadow-md  rounded-sm outline-none px-3 py-1"
              placeholder="Likes"
            />
            {errors.likes && (
              <span className="text-sm text-red-500">
                {errors.likes?.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <Button>Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
