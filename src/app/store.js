import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import commonSliceReducer from '../features/common/commonSlice';
import employeesSliceReducer from '../features/employees/employeesSlice';
import partnerSliceReducer from '../features/partner/partnerSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    common: commonSliceReducer,
    auth: authSliceReducer,
    employees: employeesSliceReducer,
    partner: partnerSliceReducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
