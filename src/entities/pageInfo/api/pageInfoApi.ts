import { baseApi } from '@/shared/api';
import { IAboutInfo } from '@/entities/pageInfo';

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
    }),
});

export const { useGetAboutInfoQuery } = pageInfoApi;
