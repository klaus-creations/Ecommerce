import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminDashboardLayout() {
  const paths = useLocation();
  const values = paths.pathname.split("/");
  const filteredValues = values.filter((el) => el !== "");
  const activeLocation = filteredValues[filteredValues.length - 1];

  console.log(activeLocation);

  return (
    <div className="size-full flex flex-col text-gray-900 dark:text-gray-100">
      <div className="w-full h-[10%] flex flex-col justify-around shadow-md shadow-orange-500/[.2] px-1">
        <h2 className="text-xl lg:text-2xl font-bold tracking-[1px] text-orange-500">
          Dashboard
        </h2>

        <div className="w-full flex gap-7 overflow-x-auto">
          <Link
            to={"/admin/dashboard"}
            className={
              activeLocation === "dashboard"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-orange-500"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            Overview
          </Link>

          <Link
            to={"/admin/dashboard/products"}
            className={
              activeLocation === "products"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-orange-500"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            products
          </Link>

          <Link
            to={"/admin/dashboard/categories"}
            className={
              activeLocation === "categories"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-orange-500"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            categories
          </Link>
        </div>
      </div>

      <div className="w-full h-[90%] overflow-y-auto p-1">
        <Outlet />
      </div>
    </div>
  );
}
