import { baseApi } from '@/shared/api';
import { ISeo } from '../model';

const seoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSeos: build.query<ISeo[], void>({
            query: () => ({
                url: '/seos',
            }),
        }),
    }),
});

export const { useGetSeosQuery } = seoApi;
