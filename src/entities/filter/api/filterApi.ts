import { baseApi } from '@/shared/api';
import { IFilterDto, IFilterBody } from './types.ts';

const filterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilters: build.query<IFilterDto[], void>({
            query: () => ({
                url: '/filters',
            }),
        }),
        setFilters: build.mutation<void, IFilterBody>({
            query: (body) => ({
                url: '/filters',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetFiltersQuery, useSetFiltersMutation } = filterApi;
