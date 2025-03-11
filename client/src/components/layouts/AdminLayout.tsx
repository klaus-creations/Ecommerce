import CustomSidebar from "@/components/sidebars/CustomSidebar";
import AdminWrapper from "../admin/AdminWrapper";
import { Outlet } from "react-router-dom";

export default function Adminlayout() {
  return (
    <AdminWrapper>
      <CustomSidebar />
      <div className="size-full absolute inset-0 px-6 py-4">
        <Outlet />
      </div>
    </AdminWrapper>
  );
}
