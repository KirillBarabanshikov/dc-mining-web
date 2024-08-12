import { IProductDto } from '../api';
import { IProduct } from '../model';
import { createSlug } from '@/shared/lib';
import { mapCategory } from '@/entities/category/lib';

export function mapProduct(product: IProductDto): IProduct {
    return {
        ...product,
        slug: createSlug(product.title),
        category: product.category ? mapCategory(product.category) : undefined,
    };
}
