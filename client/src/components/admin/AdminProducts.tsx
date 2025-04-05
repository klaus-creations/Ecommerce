// NOTE: IMPORTING SHACN COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, ChevronsUpDown, Plus, SearchIcon } from "lucide-react";
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

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { productValidations } from "@/validations";

// NOTE: IMPORTING THIRD PARTY LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "../common/Heading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProducts, getAllCategories, getAllProducts } from "@/features/request";

import { CONFIG } from "@/config/env.js"
import React from "react";

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

const TableRowC = function() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts
  })
  const products = data?.data
  console.log(typeof products)
  if (products) {

    if (products[4].images) {
      console.log(products[3].images[0])
      const some = `${CONFIG.SERVER_URI}/images/${products[4].images[0]}`
      console.log(some)
    }
  }
  // `${`${CONFIG.SERVER_URI}/images${products[3][0]}}
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
      {

      }


      {

      }
      {isLoading ? <TableBody className="w-full h-full flex items-center justify-center">Loaindg</TableBody> : Array.from({ length: 20 }, (_, i) => {
        return (
          <TableBody key={i}>
            <TableRow className="">
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>
                <img
                  className="size-14"
                  src={products ? `${CONFIG.SERVER_URI}/images/${products[4].images[0]}` : null}
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

const DialogC = function() {
  const queryClient = useQueryClient();

  const [value, setValue] = React.useState<string>("electronics");
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
      category: value,
      images: [],
      ratings: undefined,
      reviews: [],
      likes: undefined,
      likedBy: [],
    },
    mode: "onBlur",
  });


  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: createProducts,
    onSuccess: (data) => {
      toast("User create and logged In successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err: any) => {
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred";
      toast(errorMessage);
    },
  });

  const onSubmit = async function(data: any) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", String(data.price)); // Ensure all are strings
    formData.append("discountedPrice", String(data.discountedPrice));
    formData.append("stock", String(data.stock));
    formData.append("category", value); // if you're setting this from state

    // Handle multiple image uploads
    Array.from(data.images).forEach((file: any) => {
      formData.append("images", file); // "images" must match multer field name
    });

    // Now call the mutation
    mutate(formData);
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
              className="w-full border-[1px] border-secondary shadow-md h-20 resize-none  rounded-sm outline-none px-3 py-1"
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
            <CategoryFilter value={value} setValue={setValue} />
          </div>


          <div className="flex flex-col gap-2 items-start">
            <input
              {...register("images")}
              type="file"
              multiple
              className="w-full border border-secondary shadow-md rounded-sm outline-none px-3 py-1"
            />
            {errors.images && (
              <span className="text-sm text-red-500">
                {errors.images?.message}
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





interface IAddProductCategoryFilter {
  value: string,
  setValue: (value: string) => void
}

const CategoryFilter = function({ value, setValue }: IAddProductCategoryFilter) {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  const categories = data?.data || [];

  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="hidden lg:flex" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-xs lg:text-base px-2 py-1 lg:px-3 lg:py-2"
        >
          {categories.find((category) => category.slug === value)?.name || "All Categories"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category: any) => (
                <CommandItem
                  key={category.slug}
                  value={category.slug}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  {category.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.slug ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};






