import { baseApi } from '@/shared/api';
import { IAboutInfo, IDataCenterInfo, IDeliveryAndPaymentInfo, ILeasingInfo, IMassMedia } from '@/entities/pageInfo';

const pageInfoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutInfo: build.query<IAboutInfo, void>({
            query: () => ({
                url: '/about',
            }),
        }),
        getAboutMassMediaInfo: build.query<IMassMedia, string>({
            query: (id) => ({
                url: `/about_mass_media/${id}`,
            }),
        }),
        getLeasingInfo: build.query<ILeasingInfo, void>({
            query: () => ({
                url: '/leasing',
            }),
        }),
        getDataCenterInfo: build.query<IDataCenterInfo, void>({
            query: () => ({
                url: '/dataCenters',
            }),
        }),
        getPaymentInfo: build.query<IDeliveryAndPaymentInfo[], void>({
            query: () => ({
                url: '/payments',
            }),
        }),
        getDeliveryInfo: build.query<IDeliveryAndPaymentInfo[], void>({
            query: () => ({
                url: '/deliveries',
            }),
        }),
    }),
});

export const {
    useGetAboutInfoQuery,
    useGetLeasingInfoQuery,
    useGetDataCenterInfoQuery,
    useGetPaymentInfoQuery,
    useGetDeliveryInfoQuery,
    useGetAboutMassMediaInfoQuery,
} = pageInfoApi;
