import DashboardNav from "@/components/DashboardComponents/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav/>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
