import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTasks, deleteTask } from "../../redux/features/tasks/taskActions";
import { selectTasks } from "../../redux/features/tasks/selectors";
import TaskForm from "./TaskForm";
import { Task } from "../../types/taskTypes";

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleNewTaskClick = () => {
    setEditingTask(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded mb-4"
        onClick={handleNewTaskClick}
      >
        New Task
      </button>

      {editingTask === null && (
        <TaskForm onClose={() => setEditingTask(null)} />
      )}

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border rounded flex justify-between">
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <small>{task.dueDate}</small>
            </div>
            <div>
              <button
                className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                onClick={() => setEditingTask(task)}
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
