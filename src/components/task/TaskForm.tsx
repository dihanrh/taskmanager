import React, { useState } from 'react';
import { Task } from '../../types/taskTypes';
import { useAppDispatch } from '../../redux//hooks';
import { createTask, updateTask } from '../../redux/features/tasks/taskActions';

interface TaskFormProps {
  initialTask?: Task;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onClose }) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<Task>(
    initialTask || {
      id: 0,
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      tags: [],
    }
  );

  const handleSubmit = () => {
    if (initialTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }
    onClose();
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">{initialTask ? 'Edit Task' : 'New Task'}</h2>
      <div className="my-2">
        <label className="block text-sm">Title</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm">Description</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm">Due Date</label>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm">Priority</label>
        <select
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value as Task['priority'] })}
          className="w-full border rounded px-2 py-1"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="my-2">
        <label className="block text-sm">Tags</label>
        <input
          type="text"
          placeholder="Comma-separated tags"
          value={task.tags.join(', ')}
          onChange={(e) => setTask({ ...task, tags: e.target.value.split(',').map((t) => t.trim()) })}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
          Cancel
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
