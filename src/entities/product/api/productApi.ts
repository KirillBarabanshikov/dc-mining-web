import { baseApi } from '@/shared/api';
import { IProduct, IOrderProduct } from '@/entities/product';

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], void>({
            query: () => ({
                url: '/products',
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
