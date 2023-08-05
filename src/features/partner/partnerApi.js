import { apiSlice } from '../api/apiSlice';
import { setPartners } from './partnerSlice';

const PARTNER_SEARCH_PATH = '/partner';

export const partnerApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPartners: builder.query({
      query: () => `${PARTNER_SEARCH_PATH}/all`,
      keepUnusedDataFor: 5,

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setPartners(result.data.partners));
        } catch (err) {
          // nothing to do
        }
      },
    }),
  }),
});

export const { useGetPartnersQuery } = partnerApi;
