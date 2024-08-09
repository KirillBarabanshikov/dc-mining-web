import { baseApi } from '@/shared/api';
import { ICategory } from '../model';
import { BASE_URL } from '@/shared/consts';
import { createSlug } from '@/shared/lib';

const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<ICategory[], void>({
            query: () => ({
                url: '/product_categories',
            }),
            transformResponse: (response: ICategory[]) => {
                return response.map((category) => ({
                    ...category,
                    image: BASE_URL + category.image,
                    name: getCategoryName(category.title),
                    slug: createSlug(category.title),
                }));
            },
        }),
    }),
});

export const { useGetCategoriesQuery } = categoryApi;

function getCategoryName(title: string) {
    switch (title) {
        case 'asicMiners':
            return 'ASIC майнеры';
        case 'containersMining':
            return 'Контейнеры для майнинг ферм';
        case 'firmware':
            return 'Прошивки для оборудования';
        case 'accessories':
            return 'Комплектующие';
        case 'accommodationDataCentre':
            return 'Размещение в дата центре';
        case 'repairAndService':
            return 'Ремонт и сервис';
        default:
            return title;
    }
}
