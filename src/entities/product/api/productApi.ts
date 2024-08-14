import { baseApi } from '@/shared/api';
import { IOrderProduct, IProduct, IProductsByCategory } from '../model';
import { IProductDto, IProductsByCategoryDto } from './types.ts';
import { mapProduct, mapProductsByCategory } from '../lib';

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], Record<string, any> | undefined>({
            query: (params) => ({
                url: '/products',
                params: params,
            }),
            transformResponse: (response: IProductDto[]) => response.map(mapProduct),
        }),
        getProductById: build.query<IProduct, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            transformResponse: (response: IProductDto) => mapProduct(response),
        }),
        orderProduct: build.mutation<void, IOrderProduct>({
            query: (body) => ({
                url: '/buy',
                method: 'POST',
                body,
            }),
        }),
        compareProducts: build.mutation<IProduct[], number[]>({
            query: (productId) => ({
                url: '/product/compare',
                method: 'POST',
                body: { productId },
            }),
        }),
        getProductsByCategoryId: build.query<IProductsByCategory, number | string>({
            query: (categoryId) => ({
                url: `/productCategoryShow/${categoryId}`,
            }),
            keepUnusedDataFor: 0,
            transformResponse: (response: IProductsByCategoryDto) => mapProductsByCategory(response),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useOrderProductMutation,
    useLazyGetProductsQuery,
    useCompareProductsMutation,
    useGetProductsByCategoryIdQuery,
    useLazyGetProductsByCategoryIdQuery,
} = productApi;
