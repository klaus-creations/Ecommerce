import HeaderComponent from "@/components/common/HeaderComponent";
import { Outlet } from "react-router-dom";
import { useTheme } from "@/features/theme";

export default function MainLayoutPage() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div
      className={`${
        theme && "dark"
      } w-full h-screen flex flex-col bg-slate-100 dark:bg-slate-900 overflow-hidden text-black dark:text-white`}
    >
      <HeaderComponent />
      <main className="w-full h-[85%] bg-slate-50 dark:bg-slate-800 overflow-y-auto">
        {<Outlet />}
      </main>
    </div>
  );
}
