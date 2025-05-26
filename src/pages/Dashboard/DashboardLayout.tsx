
import DashboardNav from "@/components/DashboardComponents/DashboardNav";
import Sidebar from "@/components/DashboardComponents/Sidebar"; // adjust path if needed
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <DashboardNav />

      {/* Main area: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar - hidden on small devices */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6  min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
