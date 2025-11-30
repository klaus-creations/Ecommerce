import { width } from "@/constants/styles";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${width} min-h-[90vh] overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-12`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[45%] flex flex-col items-start gap-6"
      >
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-primary/10 rounded-full -z-10" />
          <h1 className="text-black dark:text-white">
            <span className="text-3xl lg:text-4xl font-medium leading-tight">
              All In One <br />
              <span className="relative">
                Place
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10" />
              </span>
            </span>
            <span className="block text-4xl lg:text-5xl 2xl:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mt-2">
              Happy Shopping
            </span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-lg leading-relaxed"
        >
          Not just a marketplace, but a curated destination for premium goods and exceptional experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button className="px-6 py-4 text-sm lg:text-lg font-semibold rounded-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Explore More
          </Button>
          <Button variant="outline" className="px-6 py-4 text-sm lg:text-lg font-semibold rounded-lg border-2 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            Trending Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center gap-4 mt-8"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={`/avatars/avatar-${item}.jpg`}
                alt="Happy customer"
                className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800"
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Join 10k+ happy customers</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span>5.0 (2.5k reviews)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[55%] relative"
      >
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-64 h-64 bg-purple-600/10 rounded-full -z-10 blur-3xl" />

        <img
          className="w-full max-w-2xl mx-auto object-contain rounded-xl shadow-2xl"
          alt="Modern shopping experience"
          src="/Hero1.svg"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-4 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border dark:border-gray-700"
        >
          <div className="text-sm font-semibold">50% OFF</div>
          <div className="text-xs text-gray-500">Today Only</div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -left-4 bottom-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border dark:border-gray-700"
        >
          <div className="text-sm font-semibold">New Arrivals</div>
          <div className="text-xs text-gray-500">Just In</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

// [#115061]
