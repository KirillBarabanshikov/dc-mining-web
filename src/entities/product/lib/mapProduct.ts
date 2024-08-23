import { IProductDto } from '../api';
import { IProduct, IProductImage } from '../model';
import { createSlug } from '@/shared/lib';
import { mapCategory } from '@/entities/category/lib';
import placeholderImg from '@/shared/assets/images/product/placeholder.png';
import { BASE_URL } from '@/shared/consts';

export function mapProduct(product: IProductDto): IProduct {
    return {
        ...product,
        images: product.images.length ? product.images.map(mapImage) : [{ id: 0, image: placeholderImg }],
        slug: createSlug(product.title),
        category: product.category ? mapCategory(product.category) : undefined,
    };
}

function mapImage(image: IProductImage): IProductImage {
    return {
        id: image.id,
        image: BASE_URL + image.image,
    };
}
