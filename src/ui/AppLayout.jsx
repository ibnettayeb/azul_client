import HomeHeader from "./HomeHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <HomeHeader />
      <div className="h-[calc(100vh-80px)] container mx-auto grid grid-cols-[auto_1fr_auto] mt-6">
        <Sidebar />
        <main className="overflow-y-scroll no-scrollbar">
          <Outlet />
        </main>
        <div className="w-96">right sidebar</div>
      </div>
    </>
  );
}

export default AppLayout;
