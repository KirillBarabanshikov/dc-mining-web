import { baseApi } from '@/shared/api';
import { IProduct, IOrderProduct } from '@/entities/product';

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], Record<string, any> | undefined>({
            query: (params) => ({
                url: '/products',
                params: params,
            }),
        }),
        orderProduct: build.mutation({
            query: (body: IOrderProduct) => ({
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
    }),
});

export const { useGetProductsQuery, useOrderProductMutation, useLazyGetProductsQuery, useCompareProductsMutation } =
    productApi;
