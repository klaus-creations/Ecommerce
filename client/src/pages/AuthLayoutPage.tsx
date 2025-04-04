import AuthHeaderComponent from "@/components/common/AuthHeaderComponent";
import { useTheme } from "@/features/theme";
import { Outlet } from "react-router-dom";

export default function AuthLayoutPage() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode && "dark"} w-full min-h-screen relative`}>
      <AuthHeaderComponent />
      <div
        className="w-full h-full bg-slate-50 dark:bg-zinc-950 overflow-hidden text-black
       dark:text-white"
      >
        <Outlet />
      </div>
    </div>
  );
}
