import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import CustomersSection from "./components/CustomersSection";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";
import DashBoardCharts from "./components/DashBoardCharts";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <TopBar />

        {/* Main Dashboard Contents */}
        <div className="p-6 flex-1">
          <DashboardCards />
          <div className="mt-6">
            <div className="text-xl font-bold">
              <DashBoardCharts />
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xl font-bold">
              <CustomersSection />
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-bold">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
