import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from '../pages/Home';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Hero />
        <div className="flex-1 p-6">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Layout;
