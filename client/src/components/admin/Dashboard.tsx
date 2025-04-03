import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardChart } from "./DashboardChart";

export default function Dashboard() {
  return (
    <div className="size-full p-1">
      <div className="w-full flex gap-4 overflow-x-auto">
        <EachOverview link="/hello" name="Products" number={30} />
        <EachOverview link="/hello" name="Products" number={30} />
        <EachOverview link="/hello" name="Products" number={30} />
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[50%]">
          <DashboardChart />
        </div>

        <div className="w-full lg:w-[50%]">
          Hello world this is one part of the dasboard
        </div>
      </div>
    </div>
  );
}

interface IEachOverview {
  name: string;
  number: number;
  link: string;
}

const EachOverview = function ({ name, number, link }: IEachOverview) {
  return (
    <div className="w-[90%] sm:w-[70%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] flex flex-col px-2 py-5 rounded-lg shadow-md  shrink-0 bg-slate-300/[.2] dark:bg-slate-950/[.1] ">
      <span className="text-base lg:text-xl font-bold tarcking-[1px]">
        {name}
      </span>

      <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold tarcking-[1px]">
        {number}
      </span>

      <Link to={link} className="flex items-center gap-2 text-primary">
        <span className="text-xs lg:text-sm font-extrabold tracking-[1px]">
          See More
        </span>

        <ExternalLink className="size-3" />
      </Link>
    </div>
  );
};
