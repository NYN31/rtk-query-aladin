import { getUrlSearchParams } from '../../helper/get-url-search-params';
import { apiSlice } from '../api/apiSlice';
import { setDesignations } from './employeesSlice';

const EMPLOYEE_SEARCH_PATH = '/employee';

export const employeesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getEmployees: builder.query({
      query: ({ page, size }) => {
        const params = getUrlSearchParams({ page, size });
        return `${EMPLOYEE_SEARCH_PATH}/list?${params}`;
      },
      keepUnusedDataFor: 60,
    }),

    getEmployeesByName: builder.query({
      query: ({ name, page, size }) => {
        const params = getUrlSearchParams({ name, page, size });
        return `${EMPLOYEE_SEARCH_PATH}/search?${params}`;
      },
      keepUnusedDataFor: 10,
    }),

    getDesignations: builder.query({
      query: () => {
        return `${EMPLOYEE_SEARCH_PATH}/designation/all`;
      },
      keepUnusedDataFor: 60,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setDesignations(result.data.content));
        } catch (err) {
          // nothing to do
        }
      },
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeesByNameQuery,
  useGetDesignationsQuery,
} = employeesApi;
