import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { guarantees } from "@/constants/data";
import { Check, Truck, Shield, RefreshCw } from "lucide-react";

export default function LittleAbout() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`${width} relative overflow-hidden py-12 lg:py-16`}
    >
      {/* Glowing background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 backdrop-blur-sm p-6 lg:p-10 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
        <Heading heading="Little About Us" />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 mb-6"
        >
          Your Journey to{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Effortless Elegance</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10" />
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed"
        >
          We're not just a marketplace, but a curated destination for those who appreciate quality and style.
          Our mission is to bring you the finest products with exceptional service, making your shopping
          experience truly effortless and elegant.
        </motion.p>

        <LittleOverview />
        <GuaranteeComponent />
      </div>
    </motion.section>
  );
}

const GuaranteeComponent = function () {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-6 lg:py-10"
    >
      {guarantees.map((el, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all"
        >
          <Guarantee
            title={el.title}
            description={el.description}
            logo={el.logo}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

interface GuaranteeProps {
  title: string;
  description: string;
  logo: string;
}

const Guarantee = function ({ title, description, logo }: GuaranteeProps) {
  const iconMap: Record<string, JSX.Element> = {
    "check": <Check className="w-6 h-6 text-primary" />,
    "truck": <Truck className="w-6 h-6 text-primary" />,
    "shield": <Shield className="w-6 h-6 text-primary" />,
    "refresh": <RefreshCw className="w-6 h-6 text-primary" />,
  };

  return (
    <div className="flex gap-4 items-start">
      <div className="p-2 bg-primary/10 rounded-lg">
        {iconMap[logo] || <Check className="w-6 h-6 text-primary" />}
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const LittleOverview = function () {
  const stats = [
    { label: "Products", value: "450+" },
    { label: "Categories", value: "20+" },
    { label: "Happy Customers", value: "10K+" },
    { label: "Delivery Areas", value: "30+" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 bg-gradient-to-r from-primary/5 to-purple-600/5 dark:from-primary/10 dark:to-purple-600/10 p-4 lg:p-6 rounded-xl mb-8 lg:mb-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="flex flex-col items-center gap-2 p-3 lg:p-4"
        >
          <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            {stat.value}
          </span>
          <span className="text-sm lg:text-base font-medium text-gray-600 dark:text-gray-400 text-center">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};;
