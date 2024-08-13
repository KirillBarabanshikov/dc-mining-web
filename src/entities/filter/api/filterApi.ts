import { baseApi } from '@/shared/api';
import { IFilterDto, IFilterBody } from './types.ts';
import { IFilter } from '../model';
import { mapFilter } from '../lib';

const filterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilters: build.query<IFilter[], void>({
            query: () => ({
                url: '/filters',
            }),
            transformResponse: (response: IFilterDto[]) => response.map(mapFilter),
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
