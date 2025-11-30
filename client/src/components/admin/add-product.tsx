import { Check, ChevronsUpDown, Plus, Loader2, ImagePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { toast } from "sonner";
import { productValidations } from "@/validations";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProducts, getAllCategories } from "@/features/request";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

const DialogC = function () {
  const queryClient = useQueryClient();
  const [value, setValue] = React.useState<string>("electronics");
  const [previewImages, setPreviewImages] = React.useState<string[]>([]);

  type SignupFormType = z.infer<typeof productValidations>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormType>({
    resolver: zodResolver(productValidations),
    defaultValues: {
      name: "",
      description: "",
      price: undefined,
      discountedPrice: undefined,
      stock: undefined,
      category: value,
    },
    mode: "onBlur",
  });


  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: createProducts,
    onSuccess: (data) => {
      toast.success("Product created successfully!", {
        description: "The new product has been added to your inventory.",
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset();
      setPreviewImages([]);
    },
    onError: (err: any) => {
      console.log(err)
      const errorMessage =
        err.response?.data?.message || "An unexpected error occurred";
      toast.error("Product creation failed", {
        description: errorMessage,
      });
    },
  });

  const onSubmit = async function (data: any) {
    console.log("the following are datas");
    console.log(data)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", String(data.price));
    formData.append("discountedPrice", String(data.discountedPrice));
    formData.append("stock", String(data.stock));
    formData.append("category", value);

    const input = document.getElementById("files") as HTMLInputElement | null;
    const files = input?.files ?? [];

    if (files?.length === 0) {
      toast.warning("Please select at least one image");
      return;
    }

    console.log("these are files");
    console.log(files)

    console.log(files.length)

    if (files?.length > 0) {
      for (let i = 0; i < files?.length; i++) {
        formData.append("images", files[i]);
      }
    }



    formData.forEach((value, key) => {
    if (key === "images") {


  } else {

}
});

    console.log("this is the final products to add");
    console.log(formData);
    mutate(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const previews: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          previews.push(event.target.result as string);
          if (previews.length === files.length) {
            setPreviewImages(previews);
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 text-sm">
          <span>Add Product</span>
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            Create New Product
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          {/* Product Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              className={cn(
                "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all",
                errors.name && "border-red-500 focus:ring-red-500"
              )}
              placeholder="Enter product name"
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name?.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              {...register("description")}
              className={cn(
                "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all min-h-[100px]",
                errors.description && "border-red-500 focus:ring-red-500"
              )}
              placeholder="Enter product description"
            />
            {errors.description && (
              <span className="text-sm text-red-500">{errors.description?.message}</span>
            )}
          </div>

          {/* Price and Discount */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price ($)
              </label>
              <input
                {...register("price")}
                type="number"
                step="0.01"
                className={cn(
                  "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all",
                  errors.price && "border-red-500 focus:ring-red-500"
                )}
                placeholder="0.00"
              />
              {errors.price && (
                <span className="text-sm text-red-500">{errors.price?.message}</span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Discounted Price ($)
              </label>
              <input
                {...register("discountedPrice")}
                type="number"
                step="0.01"
                className={cn(
                  "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all",
                  errors.discountedPrice && "border-red-500 focus:ring-red-500"
                )}
                placeholder="Optional"
              />
              {errors.discountedPrice && (
                <span className="text-sm text-red-500">{errors.discountedPrice?.message}</span>
              )}
            </div>
          </div>

          {/* Stock and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Stock Quantity
              </label>
              <input
                {...register("stock")}
                type="number"
                className={cn(
                  "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all",
                  errors.stock && "border-red-500 focus:ring-red-500"
                )}
                placeholder="0"
              />
              {errors.stock && (
                <span className="text-sm text-red-500">{errors.stock?.message}</span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Category
              </label>
              <CategoryFilter value={value} setValue={setValue} />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Product Images
            </label>
            <div className="flex flex-col items-center justify-center w-full">
              <label
                htmlFor="files"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <ImagePlus className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, JPEG (MAX. 5MB each)
                  </p>
                </div>
                <input
                  id="files"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {previewImages.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {previewImages.map((img, index) => (
                  <div key={index} className="relative w-16 h-16 rounded-md overflow-hidden border border-gray-200">
                    <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            {errors.images && (
              <span className="text-sm text-red-500">{errors.images?.message}</span>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-500/30 transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Product"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface IAddProductCategoryFilter {
  value: string;
  setValue: (value: string) => void;
}

const CategoryFilter = function ({ value, setValue }: IAddProductCategoryFilter) {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const categories = data?.data || [];
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          {isLoading ? (
            "Loading categories..."
          ) : (
            <>
              {categories.find((category) => category.slug === value)?.name || "Select category"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg">
        <Command className="bg-white dark:bg-gray-900">
          <CommandInput placeholder="Search categories..." className="h-9" />
          <CommandList>
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-y-auto">
              {categories.map((category: any) => (
                <CommandItem
                  key={category.slug}
                  value={category.slug}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  {category.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
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

export default DialogC;
