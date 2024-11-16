import React, { useState, useEffect } from "react";
import { Task } from "../../types/taskTypes";
import { Tag } from "../../types/tagTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createTask, updateTask } from "../../redux/features/tasks/taskActions";
import { fetchTags, createTag } from "../../redux/features/tag/tagActions";
import CreatableSelect from "react-select/creatable";
import  { MultiValue } from "react-select";

interface TaskFormProps {
  initialTask?: Task;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onClose }) => {
  const dispatch = useAppDispatch();
  const { tags, loading } = useAppSelector((state) => state.tags);

  const [task, setTask] = useState<Task>(
    initialTask || {
      id: 0,
      title: "",
      description: "",
      dueDate: "",
      createdAt: new Date().toISOString(),
      priority: "Low",
      tags: [],
    }
  );

  useEffect(() => {
    dispatch(fetchTags());
    if (initialTask) {
      setTask(initialTask);
    }
  }, [dispatch, initialTask]);

  const handleCreateTag = async (inputValue: string) => {
    const newTag: Partial<Tag> = { name: inputValue };
    const result = await dispatch(createTag(newTag));

    if (result.meta.requestStatus === "fulfilled") {
      setTask((prevTask) => ({
        ...prevTask,
        tags: [...prevTask.tags, result.payload as Tag],
      }));
    }
  };

  const handleTagChange = (selectedOptions: MultiValue<{ value: string; label: string }>) => {
    const selectedTags: Tag[] = selectedOptions.map((opt) => ({
      id: opt.value,
      name: opt.label,
    }));
    setTask({
      ...task,
      tags: selectedTags,
    });
  };

  const handleSubmit = () => {
    if (task.title.trim() === "") {
      alert("Task title is required.");
      return;
    }

    if (initialTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }
    onClose();
  };

  const tagOptions = tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));

  console.log(fetchTags);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold dark:text-white">
        {initialTask ? "Edit Task" : "New Task"}
      </h2>
      <div className="my-2">
        <label className="block text-sm dark:text-gray-300">Title</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm dark:text-gray-300">Description</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm dark:text-gray-300">Due Date</label>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="my-2">
        <label className="block text-sm dark:text-gray-300">Priority</label>
        <select
          value={task.priority}
          onChange={(e) =>
            setTask({ ...task, priority: e.target.value as Task["priority"] })
          }
          className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="my-2">
        <label className="block text-sm dark:text-gray-300">Tags</label>
        <CreatableSelect
          isMulti
          isLoading={loading}
          options={tagOptions}
          value={task.tags.map((tag) => ({ value: tag.id, label: tag.name }))}
          onChange={handleTagChange}
          onCreateOption={handleCreateTag}
          className="dark:text-black"
        />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="px-4 py-2 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
