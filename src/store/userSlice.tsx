import { createSlice } from '@reduxjs/toolkit';
import { IToDoUser } from '../api/users';

const initialState: IToDoUser = {
  uid: '',
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
    }
  }
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
