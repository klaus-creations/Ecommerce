import { Bell, Car, Home, Moon, Search, SunMoon, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useTheme } from "@/features/theme";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Customers",
    url: "/admin/customers",
    icon: Users,
  },
  {
    title: "Search",
    url: "/admin/search",
    icon: Search,
  },
  {
    title: "Orders",
    url: "#",
    icon: Car,
  },
];

export default function CustomSidebar() {
  const { isDarkMode: theme, setTheme } = useTheme();
  return (
    <>
      <Sidebar>
        <SidebarContent className="flex flex-col items-center bg-slate-200 dark:bg-zinc-950">
          <SidebarHeader>
            <Link
              to={"/"}
              className="text-base lg:text-xl font-bold first-letter:text-2xl lg:first-letter:text-3xl first-letter:font-extrabold text-primary"
            >
              Gebeya
            </Link>
          </SidebarHeader>
          <SidebarGroup className="mb-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarFooter>
            {theme ? (
              <button
                onClick={() => setTheme(false)}
                className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
              >
                <Moon className="text-secondary size-6 lg:size-8" />
              </button>
            ) : (
              <button
                onClick={() => setTheme(true)}
                className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md"
              >
                <SunMoon className="text-secondary size-6 lg:size-8" />
              </button>
            )}
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
