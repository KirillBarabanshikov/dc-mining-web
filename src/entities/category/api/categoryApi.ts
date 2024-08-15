import { baseApi } from '@/shared/api';
import { ICategory } from '../model';
import { mapCategory } from '../lib';
import { ICategoryDto } from './types.ts';

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: '/product_categories',
            }),
            transformResponse: (response: ICategoryDto[]) => response.map(mapCategory),
        }),
        getCategoryById: build.query<ICategory, string | number>({
            query: (id) => ({
                url: `/product_categories/${id}`,
            }),
            transformResponse: (response: ICategoryDto) => mapCategory(response),
        }),
    }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
