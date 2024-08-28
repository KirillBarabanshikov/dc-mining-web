import { baseApi } from '@/shared/api';
import { ISlide } from '@/entities/mainSlider/model';
import { BASE_URL } from '@/shared/consts';

const mainSliderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSlider: build.query<ISlide[], void>({
            query: () => ({
                url: '/main_slider',
            }),
            transformResponse: (response: ISlide[]) => {
                return response.map((slide) => ({ ...slide, media: BASE_URL + slide.media }));
            },
        }),
    }),
});

export const { useGetSliderQuery } = mainSliderApi;
