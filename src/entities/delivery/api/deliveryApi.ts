import { baseApi } from '@/shared/api';
import { IDelivery } from '@/entities/delivery';

const deliveryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDeliveries: build.query<IDelivery[], void>({
            query: () => ({
                url: '/deliveries',
            }),
        }),
        getPayments: build.query<IDelivery[], void>({
            query: () => ({
                url: '/payments',
            }),
        }),
    }),
});

export const { useGetDeliveriesQuery, useGetPaymentsQuery } = deliveryApi;
