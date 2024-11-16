import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
    />
    </div>
  );
};

export default Layout;
