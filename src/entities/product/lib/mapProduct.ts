import { IProductDto } from '../api';
import { IProduct } from '../model';
import { createSlug } from '@/shared/lib';

// TODO нет категории
export function mapProduct(product: IProductDto): IProduct {
    return { ...product, slug: createSlug(product.title) };
}
