import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';

const store = configureStore({
    reducer: {
      tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;