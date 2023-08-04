import { Navigate, useNavigate } from 'react-router-dom';

import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';
import { useToast } from '@chakra-ui/react';
import { setResponseMessage } from '../common/commonSlice';

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
        } catch (err) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
