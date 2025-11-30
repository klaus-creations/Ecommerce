
import { Link, Outlet, useLocation } from "react-router-dom";
import { Bell, ShieldAlert, MessageCircleHeart, Star } from "lucide-react";

export default function AdminNotificationLayout() {
  const paths = useLocation();
  const values = paths.pathname.split("/");
  const filteredValues = values.filter((el) => el !== "");
  const activeLocation = filteredValues[filteredValues.length - 1] || "notifications";

  return (
    <div className="size-full flex flex-col">
      {/* Glowing Header */}
      <div className="w-full h-24 flex flex-col justify-center px-6 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-indigo-400/30 filter blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-400/20 filter blur-3xl"></div>

        <div className="flex flex-col gap-2 z-10">
          <div className="flex items-center gap-3">
            <Bell className="text-indigo-500 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight">
              Notifications
            </h2>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            <Link
              to={"/admin/notifications/"}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeLocation === "notifications"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-indigo-500/10"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800"
              )}
            >
              <Bell className="h-4 w-4" />
              All
            </Link>

            <Link
              to={"/admin/notifications/admin-requests"}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeLocation === "admin-requests"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-indigo-500/10"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800"
              )}
            >
              <ShieldAlert className="h-4 w-4" />
              Admin Requests
            </Link>

            <Link
              to={"/admin/notifications/new-testimonials"}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeLocation === "new-testimonials"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-indigo-500/10"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800"
              )}
            >
              <MessageCircleHeart className="h-4 w-4" />
              Testimonials
            </Link>

            <Link
              to={"/admin/notifications/new-reviews"}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeLocation === "new-reviews"
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-indigo-500/10"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800"
              )}
            >
              <Star className="h-4 w-4" />
              Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Content Area with subtle glow */}
      <div className="flex-1 overflow-y-auto p-6 relative">
        <div className="fixed -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-400/10 filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// Utility function for class concatenation
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

