import { baseApi } from '@/shared/api';
import { IProduct } from '@/entities/product';

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], void>({
            query: () => ({
                url: '/products',
            }),
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
