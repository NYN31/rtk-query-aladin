import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.token,
              role: result.data.role,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              role: result.data.role,
            })
          );
        } catch (err) {
          // nothing to do
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
