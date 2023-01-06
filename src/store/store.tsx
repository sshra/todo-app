import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskSlice from './currentTaskSlice';
import tasksSlice from './tasks';
import { addTaskMiddleware } from './tasksMiddle';
import { setUserMiddleware } from './userMiddle';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  user: userSlice,
  task: taskSlice,
  tasks: tasksSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [setUserMiddleware, addTaskMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
