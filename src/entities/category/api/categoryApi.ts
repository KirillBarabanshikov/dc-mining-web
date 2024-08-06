import { baseApi } from '@/shared/api';
import { ICategory } from '../model';
import { BASE_URL } from '@/shared/consts';

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: '/product_categories',
            }),
            transformResponse: (response: ICategory[]) => {
                return response.map((category) => ({ ...category, image: BASE_URL + category.image }));
            },
        }),
    }),
});

export const { useGetCategoriesQuery } = categoryApi;
