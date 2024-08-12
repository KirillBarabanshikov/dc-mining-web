export type { IProduct, IOrderProduct, IProductImage, IProductValue } from './types.ts';
export {
    productsSlice,
    toggleFavorite,
    clearFavorites,
    toggleCompare,
    clearCompare,
    addToRecent,
    setViewMode,
} from './slice.ts';
