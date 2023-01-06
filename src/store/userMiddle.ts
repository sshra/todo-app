import { Middleware } from '@reduxjs/toolkit';
import { ToDoTasks } from '../api/tasks';
import { setTasks } from './tasks';
import { setUser } from './userSlice';

export const setUserMiddleware: Middleware = store => next => action => {
  if (action.type === setUser.type) {
    const uid: string = action.payload.uid;
    const tasks = new ToDoTasks(uid);
    store.dispatch(setTasks(tasks.getTasks()));
  }
  return next(action);
}
