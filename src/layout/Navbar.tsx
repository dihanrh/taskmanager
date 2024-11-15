import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/features/theme/themeSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => console.log('Add Task clicked')}
        >
          Add Task
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => dispatch(toggleDarkMode())}>
          Toggle Dark Mode
        </button>
        <span>Notification</span>
      </div>
    </div>
  );
};

export default Navbar;
