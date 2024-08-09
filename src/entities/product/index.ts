export { ProductCard, RecentProductCard, ProductCompareCard } from './ui';
export {
    type TProductCardViewMode,
    type IProduct,
    type IOrderProduct,
    type IProductValue,
    toggleFavorite,
    toggleCompare,
    clearCompare,
    productsSlice,
    clearFavorites,
} from './model';
export { useGetProductsQuery, useOrderProductMutation, useLazyGetProductsQuery, useGetProductByIdQuery } from './api';
