import { Plus, Loader2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCategory } from "@/features/request";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

// Validation schema
const categorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string()
    .min(2, "Slug must be at least 2 characters")
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
});

type CategoryFormType = z.infer<typeof categorySchema>;

const AddCategoryDialog = function () {
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<CategoryFormType>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: ""
    }
  });

  // Auto-generate slug from name
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "name" && value.name) {
        const generatedSlug = value.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        setValue("slug", generatedSlug);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: createNewCategory,
    onSuccess: () => {
      toast.success("🔥 Category created!", {
        description: "Your new category is ready to rock.",
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      reset();
      setOpen(false);
    },
    onError: (err: any) => {
      toast.error("💥 Oh snap!", {
        description: err.response?.data?.message || "Failed to create category",
      });
    },
  });

  const onSubmit = (data: CategoryFormType) => {
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="">
          <Plus className="mr-2 h-4 w-4" />
          New Category
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] p-0 border-0 overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-xl ">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="relative z-10">
          <DialogHeader className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
            <div className="flex items-center gap-2">
              <Sparkles className="text-purple-500 dark:text-purple-400" />
              <DialogTitle className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Add New Category
              </DialogTitle>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Category Name *
              </label>
              <div className="relative">
                <input
                  {...register("name")}
                  type="text"
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all pl-10",
                    errors.name && "border-red-500 focus:ring-red-500"
                  )}
                  placeholder="e.g. Electronics"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name?.message}</span>
              )}
            </div>

            {/* Slug Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                URL Slug *
              </label>
              <div className="relative">
                <input
                  {...register("slug")}
                  type="text"
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 transition-all pl-10",
                    errors.slug && "border-red-500 focus:ring-red-500"
                  )}
                  placeholder="e.g. electronics"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  /
                </span>
              </div>
              {errors.slug && (
                <span className="text-sm text-red-500">{errors.slug?.message}</span>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                This will be used in the URL. Only lowercase letters, numbers, and hyphens are allowed.
              </p>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Category
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Utility function for class concatenation
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default AddCategoryDialog;
