import { baseApi } from '@/shared/api';
import { IProduct, IOrderProduct } from '@/entities/product';
import { IProductDto } from './types.ts';
import { mapProduct } from '../lib';

const productApi = baseApi.injectEndpoints({
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
        getProductsByCategoryId: build.query<IProduct[], number | string>({
            query: (categoryId) => ({
                url: `/productCategoryShow/${categoryId}`,
            }),
            transformResponse: (response: IProductDto[]) => response.map(mapProduct),
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
} = productApi;
