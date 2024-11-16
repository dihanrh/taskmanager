import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col justify-between">
      <div className="p-4 text-center font-bold text-lg">
        Task Manager
      </div>
      <ul >
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">All Tasks</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
