import { createSlice } from '@reduxjs/toolkit';
import { EImportance, IToDoTask } from '../api/tasks';

const initialState: IToDoTask = {
  taskUID: '',
  userID: '',
  title: '',
  isDone: false,
  importance: EImportance.common
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action) => {
      Object.assign(state, action.payload);
    },
    setNewTask: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export default taskSlice.reducer;
export const { setTask, setNewTask } = taskSlice.actions;
