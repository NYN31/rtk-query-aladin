import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: { content: [] },
  filteredEmployees: { content: [] },
  filterEnable: false,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
      state.filteredEmployees = { content: [] };
    },
    setFilteredEmployees: (state, action) => {
      state.employees = { content: [] };
      state.filteredEmployees = action.payload;
    },
    setFilterEnable: (state, action) => {
      state.filterEnable = action.payload;
    },
  },
});

export const { setEmployees, setFilteredEmployees, setFilterEnable } =
  employeesSlice.actions;
export default employeesSlice.reducer;
