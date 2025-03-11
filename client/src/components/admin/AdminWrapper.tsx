import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../sidebars/AppSidebar";
import { useTheme } from "@/features/theme";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const { isDarkMode: theme } = useTheme();
  return (
    <div className={`${theme && "dark"} w-full h-[100vh]`}>
      <SidebarProvider
        className={`bg-slate-50 dark:bg-slate-800 w-full h-full`}
      >
        <AppSidebar />
        <main className="size-full relative">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
