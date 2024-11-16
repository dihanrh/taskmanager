import React from "react";
import { formatDate } from "../../utils/formatDate";
import { FiX } from "react-icons/fi";
import { getPriorityColor } from "../../utils/getPriorityColor";
import { Task } from "../../types/taskTypes";


interface TaskDetailsProps {
  task: Task
  onClose: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ task, onClose }) => {
  if (!task) return null;



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold dark:text-white">{task.title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={onClose}
          >
            <FiX size={20} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="dark:text-gray-300">
            <strong>Category:</strong> {task.category || "General"}
          </p>
          <p className="dark:text-gray-300">
            <strong>Description:</strong> {task.description}
          </p>
          <p className="dark:text-gray-300">
            <strong>Created At:</strong> {formatDate(task.createdAt)}
          </p>
          <p className="dark:text-gray-300">
            <strong>Due Date:</strong> {formatDate(task.dueDate)}
          </p>
          <p className="dark:text-gray-300">
            <strong>Priority:</strong>{" "}
            <span
              className={`inline-block px-4 py-2 rounded-full ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </span>
          </p>
          <div>
            <strong className="dark:text-gray-300">Tags:</strong>
            {task.tags.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {task.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="dark:text-gray-400">No tags</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
