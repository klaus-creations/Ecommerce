import React from "react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../sidebars/AppSidebar";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="size-full relative">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
