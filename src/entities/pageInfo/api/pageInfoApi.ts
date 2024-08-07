import { baseApi } from '@/shared/api';
import { IAboutInfo } from '@/entities/pageInfo';
import { ILeasingInfo } from '@/entities/pageInfo/model';

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
    }),
});

export const { useGetAboutInfoQuery, useGetLeasingInfoQuery } = pageInfoApi;
