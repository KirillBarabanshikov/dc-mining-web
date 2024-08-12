import { baseApi } from '@/shared/api';
import { IDeliveryAndPayment } from '../model';

const deliveryAndPaymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDeliveries: build.query<IDeliveryAndPayment[], void>({
            query: () => ({
                url: '/deliveries',
            }),
        }),
        getPayments: build.query<IDeliveryAndPayment[], void>({
            query: () => ({
                url: '/payments',
            }),
        }),
    }),
});

export const { useGetDeliveriesQuery, useGetPaymentsQuery } = deliveryAndPaymentApi;
