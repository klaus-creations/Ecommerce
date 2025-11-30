import { faqs } from "@/constants/faq";
import { width } from "@/constants/styles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "../common/Heading";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function FaqComponent() {
  return (
    <section className={`${width} mx-auto py-12 lg:py-16 px-4 lg:px-0`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full"
      >
        <Heading
          heading="Frequently Asked Questions"
        />
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
          Find answers to common questions about our products and services
        </p>

        <div className="space-y-4">
          {faqs.map((el, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${i}`}
                  className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-secondary/[.05]"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-lg">
                        <span className="text-lg font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                        {el.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-400">
                    <div className="pl-14">
                      {el.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Still have questions?
          </p>
          <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
