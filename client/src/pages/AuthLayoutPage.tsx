import AuthHeaderComponent from "@/components/common/AuthHeaderComponent";
import { Outlet } from "react-router-dom";

export default function AuthLayoutPage() {
  const theme = "dark";
  console.log(theme);
  return (
    <div className={`${theme && "dark"} w-full min-h-screen relative`}>
      <AuthHeaderComponent />
      <div
        className="w-full h-full bg-slate-100 dark:bg-slate-900 overflow-hidden text-black
       dark:text-white"
      >
        <Outlet />
      </div>
    </div>
  );
}
