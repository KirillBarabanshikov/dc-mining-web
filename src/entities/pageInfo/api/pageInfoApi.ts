import { baseApi } from '@/shared/api';
import { IAboutInfo, IDataCenterInfo, ILeasingInfo } from '@/entities/pageInfo';

const pageInfoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutInfo: build.query<IAboutInfo, void>({
            query: () => ({
                url: '/abouts',
            }),
            transformResponse: (response: IAboutInfo) => {
                return (response as unknown as IAboutInfo[])[0];
            },
        }),
        getLeasingInfo: build.query<ILeasingInfo, void>({
            query: () => ({
                url: '/leasings',
            }),
            transformResponse: (response: ILeasingInfo) => {
                return (response as unknown as ILeasingInfo[])[0];
            },
        }),
        getDataCenterInfo: build.query<IDataCenterInfo, void>({
            query: () => ({
                url: '/data_centers',
            }),
            transformResponse: (response: IDataCenterInfo) => {
                return (response as unknown as IDataCenterInfo[])[0];
            },
        }),
    }),
});

export const { useGetAboutInfoQuery, useGetLeasingInfoQuery, useGetDataCenterInfoQuery } = pageInfoApi;
