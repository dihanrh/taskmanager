import React from "react";
import { useTaskManager } from "../../hooks/useTaskManager";
import ConfirmationModal from "../common/ConfirmationModal";
import TaskForm from "./TaskForm";
import { formatDate } from "../../utils/formatDate";

const TaskList: React.FC = () => {
  const {
    tasks,
    editingTask,
    isFormOpen,
    openForm,
    closeForm,
    confirmDeleteTask,
    isDeleteModalOpen,
    handleDeleteTask,
  } = useTaskManager();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Task List</h1>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <TaskForm initialTask={editingTask || undefined} onClose={closeForm} />
        </div>
      )}

      {isDeleteModalOpen && (
        <ConfirmationModal
          title="Delete Task"
          message={`Are you sure you want to delete the task "${editingTask?.title}"?`}
          onConfirm={handleDeleteTask}
          onCancel={closeForm}
        />
      )}

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 border rounded flex flex-col space-y-2 dark:border-gray-700"
          >
            <div>
              <h3 className="font-bold dark:text-white">{task.title}</h3>
              <p className="dark:text-gray-300">{task.description}</p>
              <p className="dark:text-gray-500">
                <strong>Created At:</strong> {formatDate(task.createdAt)}
              </p>
              <p className="dark:text-gray-500">
                <strong>Due Date:</strong> {formatDate(task.dueDate)}
              </p>
              <p className="dark:text-gray-500">
                <strong>Priority:</strong> {task.priority}
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-2 py-1 bg-yellow-500 text-white rounded"
                onClick={() => openForm(task)}
              >
                Edit
              </button>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => confirmDeleteTask(task)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
