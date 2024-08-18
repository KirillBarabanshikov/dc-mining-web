import { useSearchParams } from 'react-router-dom';
import { IFilterBody } from '@/entities/filter';
import { CHARACTERISTICS_KEYS } from '@/shared/consts';

export const useCatalogFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setParams = ({ key, value }: { key: string; value: string[] }) => {
        if (value.length) {
            searchParams.set(key, value.join(','));
        } else {
            searchParams.delete(key);
        }
    };

    const getFilterBody = (type: string): IFilterBody => {
        const body: IFilterBody = {
            type,
        };
        const characteristics: string[] = [];

        if (searchParams.get('offers')) {
            body.tags = searchParams.get('offers') ?? '';
        }

        for (const [key, value] of searchParams.entries()) {
            if (key === 'brand') continue;

            if (key in CHARACTERISTICS_KEYS) {
                characteristics.push(`${CHARACTERISTICS_KEYS[key]}=${value}`);
            }
        }

        if (characteristics.length) {
            body.characteristics = characteristics.join(';');
        }

        if (searchParams.get('brand')) {
            body.brand = searchParams.get('brand') ?? '';
        }

        if (searchParams.get('order')) {
            if (searchParams.get('order') === '1') {
                body.sortBy = 'popularity';
            }

            if (searchParams.get('order') === '2') {
                body.sortBy = 'discount';
            }

            if (searchParams.get('order') === '3') {
                body.sortBy = 'price';
                body.sortOrder = 'ASC';
            }

            if (searchParams.get('order') === '4') {
                body.sortBy = 'price';
                body.sortOrder = 'DESC';
            }
        } else {
            body.sortBy = 'popularity';
        }

        if (searchParams.get('profitable')) {
            body.profitable = true;
        }

        if (searchParams.get('powerful')) {
            body.powerful = true;
        }

        if (searchParams.get('filter')) {
            body.customFilters = searchParams.get('filter') ?? '';
        }

        return body;
    };

    const getCurrentPage = (): string => {
        return searchParams.get('page') ?? '1';
    };

    const resetFilters = () => {
        [...searchParams.entries()].forEach(([key]) => {
            if (key === 'order' || key === 'filter') return;
            searchParams.delete(key);
        });
        const order = searchParams.get('order');
        const filter = searchParams.get('filter');
        setSearchParams({ ...(order && { order }), ...(filter && { filter }) });
    };

    return { getCurrentPage, setParams, getFilterBody, searchParams, setSearchParams, resetFilters };
};
