import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTasks, createTask, updateTask, deleteTask } from "../redux/features/tasks/taskActions";
import { selectTasks } from "../redux/features/tasks/selectors";
import { Task } from "../types/taskTypes";
import { toast } from "react-toastify";

export const useTaskManager = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const confirmDeleteTask = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setTaskToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete.id));
      toast.success("Task deleted successfully!");
    }
    setTaskToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const saveTask = (task: Task) => {
    if (task.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }
    closeForm();
  };

  return {
    tasks,
    editingTask,
    isFormOpen,
    openForm,
    closeForm,
    confirmDeleteTask,
    isDeleteModalOpen,
    handleDeleteTask,
    closeDeleteModal,
    saveTask,
  };
};
