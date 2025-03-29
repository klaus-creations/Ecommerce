import { guarantees } from "@/constants/data";
import { width } from "@/constants/styles";

export default function GuaranteeComponent() {
  return (
    <div
      className={`${width} flex justify-between py-2 lg:py-8 flex-wrap bg-orange-500/[.1] my-10`}
    >
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
}

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
        className="size-7 lg:size-8 text-orange-500"
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
