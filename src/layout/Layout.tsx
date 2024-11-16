import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "../pages/Home";

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 pt-16 md:ml-64">
        <Navbar />
        <div className="flex-1 p-6 overflow-auto">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
