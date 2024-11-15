import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api';
import { Task } from './taskTypes';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await api.fetchTasksAPI();
});

export const createTask = createAsyncThunk('tasks/createTask', async (task: Task) => {
  return await api.createTaskAPI(task);
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task: Task) => {
  return await api.updateTaskAPI(task);
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: number) => {
  await api.deleteTaskAPI(taskId);
  return taskId;
});
