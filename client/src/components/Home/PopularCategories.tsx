
import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCategories } from "@/features/request";
import type { ICategory } from "@/types/category";
import { usePagination } from "@/features/ui-slices/pagination";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function PopularCategories() {
  const queryClient = useQueryClient();
  const { page, limit, search, sortOrder } = usePagination();

  const { data, isLoading } = useQuery<{ success: boolean; data: ICategory[] }>({
    queryKey: ["categories", { page, limit, search, sortOrder }],
    queryFn: getAllCategories,
  });

  const topCategories = data?.data
    ?.sort((a, b) => b.productCount - a.productCount)
    .slice(0, 5) || [];

  return (
    <section className={`${width} py-16 lg:py-24`}>
      <div className="px-4 lg:px-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading heading="Popular Categories" />
          <p className="text-gray-600 dark:text-gray-300 mt-3 mb-10 lg:mb-14 max-w-2xl mx-auto text-lg">
            Discover trending categories loved by our community
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 lg:px-0">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl h-64 p-6 flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-md space-y-4"
              >
                <Skeleton className="h-16 w-16 rounded-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-9 w-24 rounded-md" />
              </div>
            ))
          : topCategories.map((category, i) => (
              <motion.div
                key={category._id}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={itemVariants}
                className="group relative rounded-3xl overflow-hidden h-64 flex flex-col items-center justify-center text-center px-6 py-8 border border-secpndary bg-white/10 dark:bg-white/5 backdrop-blur-2xl transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Icon Circle */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-100/20 dark:to-gray-400/10 rounded-full flex items-center justify-center mb-5 border border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white/80 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {category.name}
                </motion.h3>

                {/* Count */}
                <motion.p
                  className="text-gray-500 dark:text-gray-400 mb-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  {category.productCount} Products
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <Button
                    variant="outline"
                    className=""
                  >
                    Browse
                  </Button>
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent opacity-10 group-hover:opacity-20 transition duration-300 rounded-3xl" />
                </div>
              </motion.div>
            ))}
      </div>

      <motion.div
        className="flex justify-center mt-16 px-4 lg:px-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          variant="outline"
          className="border-gray-800 dark:border-white/20 text-gray-800 dark:text-white hover:bg-gray-100/10 dark:hover:bg-white/10 px-8 py-4 text-base font-medium rounded-xl transition-colors"
        >
          View All Categories
        </Button>
      </motion.div>
    </section>
  );
}

