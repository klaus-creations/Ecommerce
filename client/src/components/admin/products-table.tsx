import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PencilIcon, Trash2Icon, StarIcon, HeartIcon, Loader2Icon } from "lucide-react";
import type {  IProduct }  from "../../types/product.d"
import { CONFIG } from "@/config/env.js";
import { getAllProducts } from "../../features/request"

const TableRowC = function () {
  const { data, isLoading } = useQuery<{ success: boolean; data: IProduct[] }>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const products = data?.data;
  console.log("The following are products");
  console.log(products);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
      <div className="relative overflow-x-auto">
        <table className="w-full  backdrop-blur-sm">
          {/* Glowing Table Header */}
          <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-gray-400">
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Image
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Stock
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Likes
              </th>
              <th scope="col" className="px-6 py-4 text-left font-medium tracking-wider">
                Ratings
              </th>
              <th scope="col" className="px-6 py-4 text-right font-medium tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {isLoading ? (
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 size-full">
                <td colSpan={9} className="px-6 py-12 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <Loader2Icon className="h-6 w-6 animate-spin text-primary-500" />
                    <span className="text-gray-600 dark:text-gray-400">Loading products...</span>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800/[.5]">
              {products?.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 py-20"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex-shrink-0 size-10 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                      <img
                        className="h-full w-full object-cover"
                        src={`http://localhost:5500/api/v1/gebeya-1743849301202.jpg`}
                        alt={product.name}

                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {product.name.trim()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {product.category?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.discountedPrice ? (
                      <div className="flex flex-col">
                        <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-base font-semibold text-green-600 dark:text-green-400">
                          ${product.discountedPrice.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stock > 50
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : product.stock > 10
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <HeartIcon className="h-4 w-4 text-pink-500 mr-1" />
                      {product.likes}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                      {product.ratings}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 rounded-lg text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                        <PencilIcon className="h-5 w-5" />
                        <span className="sr-only">Edit</span>
                      </button>
                      <button className="p-2 rounded-lg text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                        <Trash2Icon className="h-5 w-5" />
                        <span className="sr-only">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};


export default TableRowC;
