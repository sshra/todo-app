import { Middleware } from '@reduxjs/toolkit';
import { IToDoTask, ToDoTasks } from '../api/tasks';
import { addTask, deleteTask, setTasks, toggleTodo } from './tasks';

export const addTaskMiddleware: Middleware = store => next => action => {
  if (action.type === addTask.type) {
    const uid = store.getState().user.uid;
    const task: IToDoTask = action.payload;
    const tasks = new ToDoTasks(uid);
    tasks.addTask(task);
    store.dispatch(setTasks(tasks.getTasks()));
  }
  if (action.type === deleteTask.type) {
    const uid = store.getState().user.uid;
    const taskID: string = action.payload;
    const tasks = new ToDoTasks(uid);
    tasks.deleteTask(taskID);
    store.dispatch(setTasks(tasks.getTasks()));
  }
  if (action.type === toggleTodo.type) {
    const uid = store.getState().user.uid;
    const taskID: string = action.payload;
    const tasks = new ToDoTasks(uid);
    tasks.toggleTask(taskID);
    store.dispatch(setTasks(tasks.getTasks()));
  }
  return next(action);
}
