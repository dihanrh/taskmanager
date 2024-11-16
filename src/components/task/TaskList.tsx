import React from "react";
import { useTaskManager } from "../../hooks/useTaskManager";
import ConfirmationModal from "../common/ConfirmationModal";
import TaskForm from "./TaskForm";
import { formatDate } from "../../utils/formatDate";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface TaskListProps {
  searchQuery: string;
}

const TaskList: React.FC<TaskListProps> = ({ searchQuery }) => {
  const {
    tasks,
    editingTask,
    isFormOpen,
    openForm,
    closeForm,
    confirmDeleteTask,
    isDeleteModalOpen,
    handleDeleteTask,
    closeDeleteModal,
  } = useTaskManager();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "bg-green-400 text-white";
      case "Medium":
        return "bg-blue-400 text-white";
      case "High":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-white"; 
    }
  };

  return (
    <div className="space-y-4">
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <TaskForm
            initialTask={editingTask || undefined}
            onClose={closeForm}
          />
        </div>
      )}

      {isDeleteModalOpen && (
        <ConfirmationModal
          title="Delete Task"
          message={`Are you sure you want to delete the task "${editingTask?.title}"?`}
          onConfirm={handleDeleteTask}
          onCancel={closeDeleteModal}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600 flex flex-col space-y-2"
          >
            <div>
              <h3 className="font-semibold text-xl dark:text-white">
                {task.title}
              </h3>
              <h4 className="font-medium dark:text-gray-300">
                Category: {task.category || "General"}
              </h4>
              <p className="dark:text-gray-400">{task.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Created At:</strong> {formatDate(task.createdAt)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Due Date:</strong> {formatDate(task.dueDate)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Priority:</strong>{" "}
                <span
                  className={`inline-block px-4 py-2 rounded-full mt-2 ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </p>
              <p className="dark:text-gray-500">
                <strong>Tags:</strong>{" "}
                {task.tags.length > 0 ? (
                  <div className="inline-block px-4 py-2 rounded mt-4 bg-gray-100 text-balck">
                    {task.tags.map((tag) => (
                      <span key={tag.id} className="dark:text-gray-300">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  "No tags"
                )}
              </p>
            </div>
            <div className="flex justify-between mt-auto space-x-2">
              <button>
                <FiEdit className="mr-2" onClick={() => openForm(task)} />
              </button>
              <button>
                <FiTrash2
                  className="mr-2"
                  onClick={() => confirmDeleteTask(task)}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <p className="text-gray-500 dark:text-gray-300">No tasks found.</p>
      )}
    </div>
  );
};

export default TaskList;
