import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2, Loader2} from "lucide-react";
import { getAllCategories, deleteCategory } from "@/features/request";
import { useState } from "react";
import type { ICategory } from "@/types/category";
import { usePagination } from "@/features/ui-slices/pagination";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const CategoriesTable = () => {
  const queryClient = useQueryClient();
  const { page, limit, search, sortOrder } = usePagination();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<ICategory | null>(
    null
  );

  const { data, isLoading } = useQuery<{ success: boolean; data: ICategory[] }>(
    {
      queryKey: ["categories", { page, limit, search, sortOrder }],
      queryFn: getAllCategories,
    }
  );

  const { mutate: deleteCategoryMutation, isPending: isDeleting } = useMutation(
    {
      mutationFn: deleteCategory,
      onSuccess: () => {
        toast.success("Category deleted successfully", {
          description: "The category has been removed from your store.",
        });
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        setDeleteDialogOpen(false);
      },
      onError: (err: any) => {
        toast.error("Failed to delete category", {
          description: err.response?.data?.message || "An error occurred",
        });
      },
    }
  );

  const handleDeleteClick = (category: ICategory) => {
    setCategoryToDelete(category);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      deleteCategoryMutation(categoryToDelete._id);
    }
  };

  const categories = data?.data ?? [];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
      <div className="relative overflow-x-auto">
        <table className="w-full backdrop-blur-sm">
          <thead className="text-xs uppercase bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="px-6 py-4 text-left font-medium tracking-wider">
                No.
              </th>
              <th className="px-6 py-4 text-left font-medium tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left font-medium tracking-wider">
                Slug
              </th>
              <th className="px-6 py-4 text-left font-medium tracking-wider">
                Product Count
              </th>
              <th className="px-6 py-4 text-right font-medium tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <Loader2 className="h-6 w-6 animate-spin text-primary-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Loading categories...
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              categories?.map((category, index) => (
                <tr
                  key={category._id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {category.slug}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {category.productCount}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Dialog
                      open={deleteDialogOpen}
                      onOpenChange={setDeleteDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <button
                          onClick={() => handleDeleteClick(category)}
                          className="p-2 rounded-lg text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                          <span className="sr-only">Delete</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] rounded-lg  border-0 shadow-xl  overflow-hidden">

                        <DialogHeader className="border-b border-gray-200 dark:border-gray-800 px-6 py-4">
                          <DialogTitle className="text-lg font-bold text-red-600 dark:text-red-400">
                            Delete Category
                          </DialogTitle>
                        </DialogHeader>

                        <div className="px-6 py-4">
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Are you sure you want to delete{" "}
                            <span className="font-semibold">
                              {categoryToDelete?.name}
                            </span>
                            ? This action cannot be undone.
                          </p>
                        </div>

                        <DialogFooter className="px-6 py-4">
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button
                            variant="destructive"
                            onClick={confirmDelete}
                            disabled={isDeleting}
                            className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 shadow-lg hover:shadow-red-500/30"
                          >
                            {isDeleting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Deleting...
                              </>
                            ) : (
                              <>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Permanently
                              </>
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesTable;

/*
 *
 *{categoryToDelete?.productCount > 0 && (
                            <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-3 rounded-lg mb-4">
                              <p className="text-sm">
                                ⚠️ This category has {categoryToDelete.productCount} products.
                                Deleting it may affect these products.
                              </p>
                            </div>
                          )}
 *
 * */
