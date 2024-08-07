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
    }),
});

export const { useGetProductsQuery, useOrderProductMutation } = productApi;
