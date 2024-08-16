import { baseApi } from '@/shared/api';
import { IFilterDto, IFilterBody, IOfferDto, IFilteredDataDto } from './types.ts';
import { ICustomFilter, IFilter } from '../model';
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
                params: { ...params, limit: 12 },
                body,
            }),
            transformResponse: (response: IFilteredDataDto): IFilteredData => ({
                countProducts: response.total_items,
                products: response.items.map(mapProduct),
            }),
        }),
        getCustomFilters: build.query<ICustomFilter[], void>({
            query: () => ({
                url: '/product_custom_filters',
            }),
        }),
    }),
});

export const { useGetFiltersQuery, useSetFiltersMutation, useGetOffersQuery, useGetCustomFiltersQuery } = filterApi;
