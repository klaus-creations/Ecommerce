import { width } from "@/constants/styles";
import Heading from "../common/Heading";

export default function LittleAbout() {
  return (
    <section
      className={`${width} flex flex-col items-start gap-3 bg-slate-300/[.5] dark:bg-slate-900/[.5] shadow-md p-2 lg:p-4`}
    >
      <Heading heading="Little About Us" />
      <h3 className="text-3xl lg:text-4xl font-bold tracking-[1px] dark:text-text2 text-gray-800">
        Your Journey to{" "}
        <strong className="text-primary">Effortless Elegance</strong>
      </h3>

      <p className="text-sm lg:text-base font-bold tracking-[1px] text-gray-500 dark:text-gray-7600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam
        debitis magni animi officiis, vero a non. Quaerat, qui. Expedita odio
        ducimus repellendus est atque officiis voluptates facilis sequi
        dignissimos. Lorem ipsum dolor sit amet consectetur
      </p>

      <LittleOverview />
      <GuaranteeComponent />
    </section>
  );
}

import { guarantees } from "@/constants/data";

const GuaranteeComponent = function () {
  return (
    <div className={`w-full flex justify-between py-2 lg:py-8 flex-wrap`}>
      {guarantees.map((el, i) => (
        <Guarantee
          key={i}
          title={el.title}
          description={el.description}
          logo={el.logo}
        />
      ))}
    </div>
  );
};

interface GuaranteeProps {
  title: string;
  description: string;
  logo: string;
}

const Guarantee = function ({ title, description, logo }: GuaranteeProps) {
  return (
    <div className="flex gap-2 items-center  p-2 rounded-lg w-[50%] lg:w-[25%]">
      <img
        src={`/${logo}`}
        alt="guaratees logo"
        className="size-7 lg:size-8 text-primary"
      />
      <div className="flex flex-col items-start">
        <p className="text-sm font-extrabold text-gray-800 dark:text-gray-300">
          {title}
        </p>

        <p className="text-sm font-bold text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const LittleOverview = function () {
  return (
    <div className="flex items-center gap-10 lg:gap-20 bg-slate-300/[.2] dark:bg-slate-900/[.2] p-3 overflow-x-auto rounded-md ">
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm lg:text-base font-light shrink-0 text-text2">
          Products
        </span>
        <span className="text-2xl lg:text-3xl font-extrabold tracking-[1px] text-text1">
          450+
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm lg:text-base font-light shrink-0 text-text2">
          Categories
        </span>
        <span className="text-2xl lg:text-3xl font-extrabold tracking-[1px] text-text1">
          20+
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm lg:text-base font-light shrink-0 text-text2">
          Happy Customers
        </span>
        <span className="text-2xl lg:text-3xl font-extrabold tracking-[1px] text-text1">
          200+
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm lg:text-base font-light shrink-0 text-text2">
          Delivary places
        </span>
        <span className="text-2xl lg:text-3xl font-extrabold tracking-[1px] text-text1">
          30+
        </span>
      </div>
    </div>
  );
};
