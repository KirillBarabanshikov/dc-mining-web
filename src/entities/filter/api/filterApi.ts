import { baseApi } from '@/shared/api';
import { IFilterDto, IFilterBody, IOfferDto } from './types.ts';
import { IFilter } from '../model';
import { mapFilter } from '../lib';
import { IProduct } from '@/entities/product';

const filterApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getFilters: build.query<IFilter[], void>({
            query: () => ({
                url: '/filters',
            }),
            transformResponse: (response: IFilterDto[]) => response.map(mapFilter),
        }),
        getOffers: build.query<IOfferDto[], void>({
            query: () => ({
                url: '/offers',
            }),
        }),
        setFilters: build.mutation<IProduct[], IFilterBody>({
            query: (body) => ({
                url: '/filters',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetFiltersQuery, useSetFiltersMutation, useGetOffersQuery } = filterApi;
