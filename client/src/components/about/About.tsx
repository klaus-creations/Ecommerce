import { width } from "@/constants/styles";
import Heading from "../common/Heading";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section
      className={`${width} flex flex-col items-start py-6 lg:py-10 gap-4`}
    >
      <Heading heading="About Our Store" />
      <h2 className="text-base lg:text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
        Your One-Stop Shop for Quality Products
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        At <strong className="text-orange-500">Our Store</strong>, we pride
        ourselves on providing a wide variety of high-quality products that
        cater to all your needs. Whether you’re looking for the latest fashion
        trends, home essentials, cutting-edge electronics, or health & beauty
        products, we have something for everyone. Our mission is to make
        shopping convenient, affordable, and enjoyable.
      </p>

      <div className="mb-3">
        <h2 className="text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
          Why Shop With Us?
        </h2>
        <div className="w-full flex items-center gap-3">
          <Check className="size-5 lg:size-6 text-orange-500" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Shopping should be more than just a transaction; it should be an
            experience. That’s why we offer:
          </p>
        </div>

        <div className="w-full flex items-center gap-2">
          <Check className="size-5 lg:size-6 text-orange-500" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From everyday essentials to luxury items, we bring you an extensive
            range of products carefully curated to meet your needs.
          </p>
        </div>

        <div className="w-full flex items-center gap-2">
          <Check className="size-5 lg:size-6 text-orange-500" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We work hard to provide competitive pricing so you can get the best
            deals without compromising on quality.
          </p>
        </div>

        <div className="w-full flex items-center gap-2">
          <Check className="size-5 lg:size-6 text-orange-500" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We ensure quick and secure delivery, so you receive your orders on
            time, every time.
          </p>
        </div>

        <div className="w-full flex items-center gap-2">
          <Check className="size-5 lg:size-6 text-orange-500" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your security is our priority. We use the latest encryption and
            payment security measures to keep your information safe.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl lg:text-2xl font-medium text-gray-300 mb-4">
          Shop With Confidence
        </h2>
        <p className="text-lg text-gray-600">
          Our dedicated customer service team is here to assist you with any
          questions or concerns. Your satisfaction is our top priority, and we
          strive to provide the best shopping experience possible.
        </p>
      </div>

      <div>
        <h2 className="text-xl lg:text-2xl font-medium text-gray-300 mb-4">
          Start Shopping Today!
        </h2>
        <p className="text-lg text-gray-600">
          Browse our categories, explore amazing deals, and experience
          hassle-free shopping with
          <strong className="text-emerald-500"> Our Store</strong>. We look
          forward to serving you!
        </p>
      </div>
    </section>
  );
}
