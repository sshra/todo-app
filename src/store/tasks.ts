import { createSlice } from '@reduxjs/toolkit';
import { IToDoTask } from '../api/tasks';

const initialState: {
  elms: IToDoTask[]
} = {
  elms: []
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.elms = action.payload;
    },
    addTask: (state, action) => {},
    deleteTask: (state, action) => {},
    toggleTodo: (state, action) => {}
  }
});

export default tasksSlice.reducer;
export const { setTasks, addTask, deleteTask, toggleTodo } = tasksSlice.actions;
