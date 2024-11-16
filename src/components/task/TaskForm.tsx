import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import ConfirmationModal from "../common/ConfirmationModal";
import { useTaskForm } from "../../hooks/useTaskForm";
import { Task } from "../../types/taskTypes";

interface TaskFormProps {
  initialTask?: Task;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onClose }) => {
  const {
    task,
    setTask,
    tags,
    loading,
    handleTagChange,
    handleCreateTag,
    saveTask,
  } = useTaskForm(initialTask, onClose);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const tagOptions = tags.map((tag) => ({
    value: tag.id.toString(),
    label: tag.name,
  }));

  const confirmSaveTask = () => {
    if (!task.title.trim()) {
      alert("Title is required!");
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmSave = () => {
    saveTask();
    setShowConfirmation(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {initialTask ? "Edit Task" : "New Task"}
      </h2>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Title</label>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Description</label>
          <textarea
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Due Date</label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Priority</label>
          <select
            value={task.priority}
            onChange={(e) =>
              setTask({ ...task, priority: e.target.value as Task["priority"] })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Category</label>
          <select
            value={task.category}
            onChange={(e) =>
              setTask({ ...task, category: e.target.value as Task["category"] })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Management">Management</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="UI">UI</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-gray-600 dark:text-gray-300">Tags</label>
          <CreatableSelect
            isMulti
            isLoading={loading}
            options={tagOptions}
            value={task.tags.map((tag) => ({
              value: tag.id.toString(),
              label: tag.name,
            }))}
            onChange={handleTagChange}
            onCreateOption={handleCreateTag}
            className="dark:text-black"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 space-x-4">
        <button
          className="px-6 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded-lg w-full sm:w-auto"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full sm:w-auto"
          onClick={confirmSaveTask}
        >
          Save
        </button>
      </div>

      {showConfirmation && (
        <ConfirmationModal
          title="Save Task"
          message="Are you sure you want to save this task?"
          onConfirm={handleConfirmSave}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default TaskForm;
