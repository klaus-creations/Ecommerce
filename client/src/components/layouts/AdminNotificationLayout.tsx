import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminNotificationLayout() {
  const paths = useLocation();
  const values = paths.pathname.split("/");
  const filteredValues = values.filter((el) => el !== "");
  const activeLocation = filteredValues[filteredValues.length - 1];

  return (
    <div className="size-full flex flex-col text-gray-900 dark:text-gray-100">
      <div className="w-full h-[10%] flex flex-col justify-around shadow-md px-1">
        <h2 className="text-xl lg:text-2xl font-bold tracking-[1px] text-primary">
          Notifications
        </h2>

        <div className="w-full flex gap-7 overflow-x-auto">
          <Link
            to={"/admin/notifications/"}
            className={
              activeLocation === "notifications"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-secondary"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            All
          </Link>

          <Link
            to={"/admin/notifications/admin-requests"}
            className={
              activeLocation === "admin-requests"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-secondary"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            Admin Requests
          </Link>

          <Link
            to={"/admin/notifications/new-testimonials"}
            className={
              activeLocation === "new-testimonials"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-secondary"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            New Testimonials
          </Link>

          <Link
            to={"/admin/notifications/new-reviews"}
            className={
              activeLocation === "new-reviews"
                ? "text-sm lg:text-base font-extrabold tracking-[1px] px-3 border-b-[2px] border-b-secondary"
                : "text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 px-3 "
            }
          >
            New reviews
          </Link>
        </div>
      </div>

      <div className="w-full h-[90%] overflow-y-auto p-1">
        <Outlet />
      </div>
    </div>
  );
}
