import HeaderComponent from "@/components/common/HeaderComponent";
import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";

export default function MainLayoutPage() {
  return (
    <div className={`size-full  flex flex-col overflow-y-hidden scroll- `}>
      <HeaderComponent />
      <main className="w-full h-[85%] overflow-y-auto">
        {<Outlet />}
        <Footer />
      </main>
    </div>
  );
}
