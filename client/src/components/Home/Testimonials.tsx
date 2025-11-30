import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import { Quote } from "lucide-react";
import Rating from "../common/Rating";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Product Designer",
    testimonial: "This product exceeded my expectations! The quality is outstanding, and the customer service was fantastic.",
    avatar: "/avatar1.jpg"
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    testimonial: "I love using this service! It has made my life so much easier, and I highly recommend it to everyone.",
    avatar: "/avatar2.jpg"
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    testimonial: "Fast delivery and excellent packaging. The product works flawlessly, and I am very satisfied.",
    avatar: "/avatar3.jpg"
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    testimonial: "Great value for the price! I've been using this for months, and it still works like new.",
    avatar: "/avatar4.jpg"
  },
  {
    name: "David Wilson",
    role: "UX Designer",
    testimonial: "Amazing experience! The team was very supportive, and the product is exactly as described.",
    avatar: "/avatar5.jpg"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Testimonials() {
  return (
    <section className={`${width} mx-auto py-16 px-4 lg:px-0`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
        className="text-center mb-12"
      >
        <motion.div variants={fadeIn}>
          <Heading
            heading="Trusted by Thousands"
          />
        </motion.div>
        <motion.h3
          variants={fadeIn}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hear From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Valued Customers</span>
        </motion.h3>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Don't just take our word for it. Here's what our customers say about their experience.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full  mx-auto relative"
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full bg-secondary/[.2] dark:bg-secondary/[.1] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="size-8 text-primary/30 mb-4" />

                      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                        {testimonial.testimonial}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25"></div>
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name[0].toUpperCase()}
                            className="relative size-12 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                          <Rating rating={5}  />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden lg:block">
            <CarouselPrevious className="size-12 left-0 border-none bg-white dark:bg-gray-800 shadow-lg hover:bg-white/90 dark:hover:bg-gray-700 text-primary" />
            <CarouselNext className="size-12 right-0 border-none bg-white dark:bg-gray-800 shadow-lg hover:bg-white/90 dark:hover:bg-gray-700 text-primary" />
          </div>
        </Carousel>
      </motion.div>

    </section>
  );
}
