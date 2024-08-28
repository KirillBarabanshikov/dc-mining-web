import { baseApi } from '@/shared/api';
import { IPersonalData } from '../model';
import { BASE_URL } from '@/shared/consts';

const personalDataApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPersonalData: build.query<IPersonalData, void>({
            query: () => ({
                url: '/personal_datas',
            }),
            transformResponse: (response: IPersonalData[]) => {
                return { ...response[0], image: BASE_URL + response[0]?.image };
            },
        }),
    }),
});

export const { useGetPersonalDataQuery } = personalDataApi;
