import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/tasks/taskSlice';
import themeReducer from './features/theme/themeSlice'
import tagReducer from './features/tag/tagSlice'

const store = configureStore({
    reducer: {
      tasks: taskReducer,
      tags: tagReducer,
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export default store;