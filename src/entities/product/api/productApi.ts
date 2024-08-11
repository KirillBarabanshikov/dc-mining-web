import { baseApi } from '@/shared/api';
import { IProduct, IOrderProduct } from '@/entities/product';
import { createSlug } from '@/shared/lib';

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], Record<string, any> | undefined>({
            query: (params) => ({
                url: '/products',
                params: params,
            }),
            transformResponse: (response: IProduct[]) => {
                return response.map((product) => ({ ...product, slug: createSlug(product.title) }));
            },
        }),
        getProductById: build.query<IProduct, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
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

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useOrderProductMutation,
    useLazyGetProductsQuery,
    useCompareProductsMutation,
} = productApi;
