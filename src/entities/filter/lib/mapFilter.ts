import { IFilterDto } from '../api';
// import { IFilter } from '../model';
import { createSlug } from '@/shared/lib';

export function mapFilter(filter: IFilterDto) {
    return {
        id: filter.id,
        category: {
            key: createSlug(filter.characteristics),
            characteristics: filter.characteristics,
        },
    };
}
