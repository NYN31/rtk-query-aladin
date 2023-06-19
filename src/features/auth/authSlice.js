import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: undefined,
  role: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
    },
    userLoggedOut: state => {
      state.accessToken = undefined;
      state.role = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
