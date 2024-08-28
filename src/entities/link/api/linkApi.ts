import { baseApi } from '@/shared/api';
import { BASE_URL } from '@/shared/consts';
import { ILink } from '../model';
import { createSlug } from '@/shared/lib';

const linkApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getLinks: build.query<ILink[], void>({
            query: () => ({
                url: '/useful_links',
            }),
            transformResponse: (response: ILink[]) => {
                return response.map((link) => ({
                    ...link,
                    media: BASE_URL + link.media,
                    slug: createSlug(link.title),
                }));
            },
        }),
        getLinkById: build.query<ILink, number | string>({
            query: (id) => ({
                url: `/useful_links/${id}`,
            }),
            transformResponse: (response: ILink) => {
                return {
                    ...response,
                    media: BASE_URL + response.media,
                    slug: createSlug(response.title),
                };
            },
        }),
    }),
});

export const { useGetLinksQuery, useGetLinkByIdQuery } = linkApi;
