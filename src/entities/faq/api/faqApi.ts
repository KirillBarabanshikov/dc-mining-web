import { baseApi } from '@/shared/api';
import { IFaq } from '@/entities/faq';

const faqApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFaq: build.query<IFaq[], void>({
            query: () => ({
                url: '/faq',
            }),
        }),
    }),
});

export const { useGetFaqQuery } = faqApi;
