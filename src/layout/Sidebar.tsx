import React, { useState } from "react";
import { FaBars, FaTimes,  FaHome, FaCog  } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div
      className={`fixed inset-0 md:left-0 transition-all duration-300 ease-in-out z-50 ${
        isSidebarCollapsed ? "w-16" : "w-64"
      } ${
        isSidebarCollapsed ? "md:w-16" : "md:w-64"
      } bg-gray-900 dark:bg-gray-800 h-full`}
    >
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl focus:outline-none"
        >
          {isSidebarCollapsed ? <FaBars /> : <FaTimes />}
        </button>
        <h2
          className={`text-white font-bold text-2xl mt-4 ${
            isSidebarCollapsed ? "hidden" : ""
          }`}
        >
          Task Manager
        </h2>

        <ul className={`mt-4 space-y-2 ${isSidebarCollapsed ? "hidden" : ""}`}>
          <li className="text-white">Tasks</li>
          <li className="text-white">Settings</li>
        </ul>
        <ul
          className={`mt-4 space-y-2 ${!isSidebarCollapsed ? "hidden" : ""}`}
        >
          <li className="text-white text-2xl">
          <FaHome />
          </li>
          <li className="text-white text-2xl">
          <FaCog />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
