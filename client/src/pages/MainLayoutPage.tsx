import HeaderComponent from "@/components/common/HeaderComponent";
import { RootState } from "@/features/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function MainLayoutPage() {
  const theme = useSelector((state: RootState) => state.theme.isDarkMode);
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
