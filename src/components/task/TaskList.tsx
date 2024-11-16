import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTasks, deleteTask } from "../../redux/features/tasks/taskActions";
import { selectTasks } from "../../redux/features/tasks/selectors";
import TaskForm from "./TaskForm";
import { Task } from "../../types/taskTypes";
import { formatDate } from "../../utils/formatDate";

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const openForm = (task?: Task) => {
    setEditingTask(task || null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setEditingTask(null);
    setIsFormOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Task List</h1>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <TaskForm
            initialTask={editingTask || undefined}
            onClose={closeForm}
          />
        </div>
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
              <p className="dark:text-gray-500">
                <strong>Tags:</strong>{" "}
                {task.tags.length > 0 ? (
                  <ul className="list-disc ml-5">
                    {task.tags.map((tag, index) => (
                      <li key={index} className="dark:text-gray-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No tags"
                )}
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
                onClick={() => dispatch(deleteTask(task.id))}
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
