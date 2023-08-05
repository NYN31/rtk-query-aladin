import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  partners: null,
};

const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    setPartners: (state, action) => {
      state.partners = action.payload;
    },
  },
});

export const { setPartners } = partnerSlice.actions;
export default partnerSlice.reducer;
