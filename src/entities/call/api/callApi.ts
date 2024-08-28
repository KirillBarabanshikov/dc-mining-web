import { baseApi } from '@/shared/api';
import { ICall } from '@/entities/call';

const callApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        orderCall: build.mutation<void, ICall>({
            query: (body) => ({
                url: '/forms',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useOrderCallMutation } = callApi;
