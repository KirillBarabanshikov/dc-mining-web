import { baseApi } from '@/shared/api';
import { IFilterDto, IFilterBody, IOfferDto, IFilteredDataDto } from './types.ts';
import { IFilter } from '../model';
import { mapFilter } from '../lib';
import { IFilteredData } from '@/entities/filter/model/types.ts';
import { mapProduct } from '@/entities/product/lib';

export const filterApi = baseApi.injectEndpoints({
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
        setFilters: build.mutation<
            IFilteredData,
            {
                body: IFilterBody;
                params: Record<string, string>;
            }
        >({
            query: ({ body, params }) => ({
                url: '/filters',
                method: 'POST',
                params,
                body,
            }),
            transformResponse: (response: IFilteredDataDto): IFilteredData => ({
                countProducts: response.total_items,
                products: response.items.map(mapProduct),
            }),
        }),
    }),
});

export const { useGetFiltersQuery, useSetFiltersMutation, useGetOffersQuery } = filterApi;
