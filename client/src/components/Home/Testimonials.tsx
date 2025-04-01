// NOTE: SHADCN UI LIBRARIES
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

const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "This product exceeded my expectations! The quality is outstanding, and the customer service was fantastic. I have been using it for a few months now, and it still works perfectly. Highly recommended for anyone looking for reliability and great performance.",
  },
  {
    name: "Sarah Smith",
    testimonial:
      "I love using this service! It has made my life so much easier, and I highly recommend it to everyone. The interface is user-friendly, and the team behind it is always available for support. I can’t imagine going back to my old way of doing things!",
  },
  {
    name: "Michael Johnson",
    testimonial:
      "Fast delivery and excellent packaging. The product works flawlessly, and I am very satisfied with my purchase. It has all the features I was looking for, and the performance is beyond what I expected. I will definitely be purchasing again in the future.",
  },
  {
    name: "Emily Davis",
    testimonial:
      "Great value for the price! I’ve been using this for months, and it still works like new. I was a bit skeptical at first, but after using it, I can confidently say that it’s one of the best purchases I’ve ever made. A solid investment!",
  },
  {
    name: "David Wilson",
    testimonial:
      "Amazing experience! The team was very supportive, and the product is exactly as described. I had a minor issue at first, but customer support was incredibly responsive and resolved it quickly. I appreciate the effort they put into making customers happy.",
  },
  {
    name: "Jessica Brown",
    testimonial:
      "The best investment I’ve made this year! The results have been fantastic, and I’ll be coming back for more. Not only is it functional, but it also looks great. I constantly get compliments from friends and colleagues about how useful it is.",
  },
  {
    name: "William Anderson",
    testimonial:
      "Exceptional quality and easy to use. I’m extremely happy with my purchase and will recommend it to friends. The setup process was smooth, and the product delivers on every promise made in the description. This is a must-have for anyone looking for quality!",
  },
  {
    name: "Sophia Martinez",
    testimonial:
      "A must-have! This has truly changed the way I work and has made things so much more efficient. I was hesitant to buy at first, but after reading other reviews, I decided to give it a try. Now, I can’t imagine going a day without it!",
  },
  {
    name: "Daniel Thomas",
    testimonial:
      "Top-notch customer service! They went above and beyond to help me, and I couldn't be more grateful. The product itself is worth every penny, and knowing there’s great support behind it makes the experience even better. I will definitely be a returning customer.",
  },
  {
    name: "Olivia White",
    testimonial:
      "Highly satisfied! The attention to detail and quality of this product is impressive. Worth every penny! It’s clear that a lot of thought went into its design and functionality. I’ve already recommended it to several friends, and they love it just as much as I do.",
  },
];

export default function Testimonials() {
  return (
    <section
      className={`${width} flex flex-col items-center gap-4 bg-slate-300/[.5] dark:bg-slate-900/[.5] p-2 lg:p-4`}
    >
      <Heading heading="People About Our Products" />
      <h3 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-gray-950 dark:text-gray-50">
        Testimonials from Our{" "}
        <strong className="text-primary">Customers</strong> On Our Services and
        Products
      </h3>
      <Carousel className="w-[100%] md:w-[90%] lg:w-[75%] 2xl:w-[60%] relative">
        <CarouselContent>
          {testimonials.map((el, index) => (
            <CarouselItem key={index} className="relative shadow-md">
              <Quote className="size-12 lg:size-6 absolute top-4 left-6 lg:left-10 text-gray-950 dark:text-gray-100 z-[1000]" />
              <div className="p-1">
                <Card className="shadow-md bg-transparent">
                  <CardContent className="flex flex-col gap-2 items-center  between p-6 pt-10">
                    <p className="text-base lg:text-xl font-light">
                      {el.testimonial}
                    </p>

                    <div className="flex flex-col items-center gap-3">
                      <span className="text-gray-700 dark:text-gray-400">
                        {el.name}
                      </span>
                      <Rating rating={5} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary dark:bg-secondary text-white hover:bg-secondary dark:hover:bg-secondary" />
        <CarouselNext className="bg-secondary dark:bg-secondary text-white hover:bg-secondary dark:hover:bg-secondary" />
      </Carousel>
    </section>
  );
}
