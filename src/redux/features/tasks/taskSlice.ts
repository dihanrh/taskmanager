import { createSlice } from '@reduxjs/toolkit';
import { TaskState } from '../../../types/taskTypes';
import * as taskActions from './taskActions';

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Tasks
    builder
      .addCase(taskActions.fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(taskActions.fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(taskActions.fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      });

    // Create Task
    builder
      .addCase(taskActions.createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      });

    // Update Task
    builder
      .addCase(taskActions.updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state.tasks[index] = action.payload;
      });

    // Delete Task
    builder
      .addCase(taskActions.deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
