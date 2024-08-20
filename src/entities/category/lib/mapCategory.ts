import { ICategoryDto } from '../api';
import { ICategory } from '../model';
import { BASE_URL } from '@/shared/consts';
import { getCategoryNameByTitle } from './getCategoryNameByTitle.ts';
import { createSlug } from '@/shared/lib';

const links: Record<string, string> = {
    accommodationDataCentre: '/data-center',
    repairAndService: '/service',
    usefulLinks: '/links',
};

export function mapCategory(category: ICategoryDto): ICategory {
    const categoryName = getCategoryNameByTitle(category.title);

    return {
        id: category.id,
        title: category.title,
        image: BASE_URL + category.image,
        display: category.display,
        name: categoryName,
        slug: createSlug(categoryName),
        subCategory: category.subCategory,
        link: links[category.title],
        images: category.images,
    };
}
