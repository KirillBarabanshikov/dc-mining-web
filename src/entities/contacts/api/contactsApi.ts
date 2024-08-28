import { baseApi } from '@/shared/api';
import { IContacts } from '@/entities/contacts';

const contactsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getContacts: build.query<IContacts, void>({
            query: () => ({
                url: '/contacts',
            }),
        }),
    }),
});

export const { useGetContactsQuery } = contactsApi;
