import { getUrlSearchParams } from '../../helper/get-url-search-params';
import { apiSlice } from '../api/apiSlice';

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
        console.log(name, page, size);
        const params = getUrlSearchParams({ name, page, size });
        return `${EMPLOYEE_SEARCH_PATH}/search?${params}`;
      },
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetEmployeesQuery, useGetEmployeesByNameQuery } =
  employeesApi;
