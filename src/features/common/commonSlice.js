import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  description: '',
  status: '',
  duration: 5000,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setResponseMessage: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = action.payload.status;
    },
  },
});

export const { setResponseMessage, setLoading } = commonSlice.actions;
export default commonSlice.reducer;
