import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTags, createTag } from "../redux/features/tag/tagActions";
import { createTask, updateTask } from "../redux/features/tasks/taskActions";
import { Task } from "../types/taskTypes";
import { Tag } from "../types/tagTypes";
import { MultiValue } from "react-select";

export const useTaskForm = (initialTask?: Task, onClose?: () => void) => {
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
    const newTag = { name: inputValue };
    const result = await dispatch(createTag(newTag));
    if (result.meta.requestStatus === "fulfilled") {
      setTask((prev) => ({
        ...prev,
        tags: [...prev.tags, result.payload as Tag],
      }));
    }
  };

  const handleTagChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>
  ) => {
    const selectedTags = selectedOptions.map((option) => ({
      id: option.value,
      name: option.label,
    }));
    setTask({ ...task, tags: selectedTags });
  };

  const saveTask = () => {
    if (task.title.trim() === "") {
      alert("Task title is required.");
      return;
    }
    if (initialTask) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }
    if (onClose) onClose();
  };

  return {
    task,
    setTask,
    tags,
    loading,
    handleTagChange,
    handleCreateTag,
    saveTask,
  };
};
