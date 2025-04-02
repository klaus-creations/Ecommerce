import { Outlet } from "react-router-dom";
import { useTheme } from "@/features/theme";

export default function WholeLayoutPage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode && "dark"
      } w-full h-screen  flex flex-col scroll `}
    >
      <div className="size-full overflow-hidden  bg-slate-50 dark:bg-zinc-950  text-black dark:text-white overflow-y-hidden">
        {<Outlet />}
      </div>
    </div>
  );
}
