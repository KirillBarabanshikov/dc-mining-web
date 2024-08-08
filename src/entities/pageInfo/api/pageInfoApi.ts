import { baseApi } from '@/shared/api';
import { IAboutInfo, IDataCenterInfo, ILeasingInfo } from '@/entities/pageInfo';

const pageInfoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutInfo: build.query<IAboutInfo, void>({
            query: () => ({
                url: '/about',
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
    }),
});

export const { useGetAboutInfoQuery, useGetLeasingInfoQuery, useGetDataCenterInfoQuery } = pageInfoApi;
