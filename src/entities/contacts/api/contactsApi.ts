import { baseApi } from '@/shared/api';
import { IContacts } from '@/entities/contacts';

const contactsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getContacts: build.query<IContacts, void>({
            query: () => ({
                url: '/contacts',
            }),
            transformResponse: (response: IContacts) => {
                return (response as unknown as IContacts[])[0];
            },
        }),
    }),
});

export const { useGetContactsQuery } = contactsApi;
