import { baseApi } from '@/shared/api';
import { IService } from '@/entities/service';

const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        sendRequest: build.mutation({
            query: (body: IService) => {
                const formData = new FormData();
                for (const key in body) {
                    formData.append(key, (body as never)[key]);
                }
                return {
                    url: '/repairAndService',
                    method: 'POST',
                    body: formData,
                };
            },
        }),
    }),
});

export const { useSendRequestMutation } = serviceApi;
