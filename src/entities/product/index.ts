export { ProductCard, RecentProductCard } from './ui';
export {
    type TProductCardViewMode,
    type IProduct,
    type IOrderProduct,
    toggleFavorite,
    toggleCompare,
    clearCompare,
    productsSlice,
    clearFavorites,
} from './model';
export { useGetProductsQuery, useOrderProductMutation, useLazyGetProductsQuery } from './api';
