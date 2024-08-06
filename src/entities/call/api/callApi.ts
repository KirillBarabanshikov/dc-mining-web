import { baseApi } from '@/shared/api';
import { ICall } from '@/entities/call';

const callApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        orderCall: build.mutation({
            query: (body: ICall) => ({
                url: '/forms',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useOrderCallMutation } = callApi;
