import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import Rating from "../common/Rating";
import { Button } from "../ui/button";
import { ShoppingCart, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Daydeals() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`${width} relative overflow-hidden  flex flex-col lg:flex-row items-center justify-between gap-8 p-6 lg:p-10 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800`}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-0" />

      {/* Product image with floating badge */}
      <motion.div
        className="relative w-full lg:w-[55%] xl:w-[50%]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute -top-3 -left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
          <Zap className="w-3 h-3 fill-white" />
          <span>HOT DEAL</span>
        </div>
        <img
          src="/deal.jpg"
          className="w-full h-auto object-cover rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
          alt="Deal of the day"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-4 lg:gap-6 w-full lg:w-[45%]">
        <Heading heading="Deal of The Day" />

        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Enjoy Our Daily Best Deal with{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">50% OFF</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10" />
          </span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="w-full flex flex-col items-start gap-4"
        >
          <h4 className="text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200">
            Premium Headset OG4k Pro
          </h4>

          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Immerse yourself in crystal-clear audio with our flagship headset. Featuring active noise cancellation, 40mm drivers, and 30-hour battery life for uninterrupted listening pleasure.
          </p>

          <div className="flex items-center gap-2">
            <Rating rating={6} />
            <span className="text-sm text-gray-500 dark:text-gray-400">(256 reviews)</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full mt-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Add To Cart</span>
              </Button>
            </motion.div>

            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="text-sm line-through">$299.99</span>
              <span className="text-2xl font-bold text-primary">$149.99</span>
            </div>
          </div>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-4 w-full bg-slate-200/50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-300 dark:border-slate-700"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2">
            <Clock className="w-4 h-4" />
            <span>Offer ends in:</span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { value: "08", label: "Hours" },
              { value: "22", label: "Minutes" },
              { value: "23", label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-700 rounded-lg shadow-md text-2xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


