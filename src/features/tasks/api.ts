import apiClient from '../../utils/apiClient';
import { Task } from './taskTypes';

const TASKS_ENDPOINT = '/tasks';

export const fetchTasksAPI = async (): Promise<Task[]> => {
  const response = await apiClient.get(TASKS_ENDPOINT);
  return response.data;
};

export const createTaskAPI = async (task: Task): Promise<Task> => {
  const response = await apiClient.post(TASKS_ENDPOINT, task);
  return response.data;
};

export const updateTaskAPI = async (task: Task): Promise<Task> => {
  const response = await apiClient.put(`${TASKS_ENDPOINT}/${task.id}`, task);
  return response.data;
};

export const deleteTaskAPI = async (taskId: number): Promise<void> => {
  await apiClient.delete(`${TASKS_ENDPOINT}/${taskId}`);
};
