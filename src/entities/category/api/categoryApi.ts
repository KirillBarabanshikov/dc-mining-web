import { baseApi } from '@/shared/api';
import { ICategory } from '../model';
import { mapCategory } from '../lib';

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: '/product_categories',
            }),
            transformResponse: (response: ICategory[]) => response.map(mapCategory),
        }),
    }),
});

export const { useGetCategoriesQuery } = categoryApi;
