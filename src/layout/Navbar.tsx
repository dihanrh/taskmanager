import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../redux/features/theme/themeSlice';
import Modal from '../components/common/Modal';
import TaskForm from '../components/task/TaskForm';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleOpenModal}
          >
            Add Task
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 text-gray-800 dark:text-white"
            onClick={() => dispatch(toggleDarkMode())}
          >
            Toggle Dark Mode
          </button>
          <span className="text-gray-800 dark:text-white">Notification</span>
        </div>
      </div>

  
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TaskForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Navbar;
