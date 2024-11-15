import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/tasks/taskSlice';
import themeReducer from './features/theme/themeSlice'

const store = configureStore({
    reducer: {
      tasks: taskReducer,
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;