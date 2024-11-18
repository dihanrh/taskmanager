import React, { useState } from "react";
import Modal from "../components/common/Modal";
import TaskForm from "../components/task/TaskForm";
import { FaPlus } from "react-icons/fa";
import DarkModeToggle from "../components/common/DarkModeToggle";


const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="fixed top-0 left-64 right-0 p-4 bg-white dark:bg-gray-800 shadow-md z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleOpenModal}
            >
              <FaPlus className="mr-2" /> Add Task
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <TaskForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Navbar;
