import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../features/api/apiSlice';
import commonSliceReducer from '../features/common/commonSlice';
import authSliceReducer from '../features/auth/authSlice';
import employeesSliceReducer from '../features/employees/employeesSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: commonSliceReducer,
    auth: authSliceReducer,
    employees: employeesSliceReducer,
  },
  //devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
