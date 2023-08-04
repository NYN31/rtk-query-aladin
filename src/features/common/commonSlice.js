import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  message: '',
  status: '',
  loading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setMessage, setLoading } = commonSlice.actions;
export default commonSlice.reducer;
