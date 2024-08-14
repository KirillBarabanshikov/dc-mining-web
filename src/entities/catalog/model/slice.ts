import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsByCategory } from '@/entities/product';
import { categoryApi, ICategory } from '@/entities/category';
import { productApi } from '@/entities/product/api';

type TInitialState = {
    category?: ICategory;
    products: IProduct[];
    countProducts: number;
};

const initialState: TInitialState = {
    products: [],
    countProducts: 0,
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
        addProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = [...state.products, ...action.payload];
        },
        setCountProducts: (state, action: PayloadAction<number>) => {
            state.countProducts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            categoryApi.endpoints.getCategoryById.matchFulfilled,
            (state, action: PayloadAction<ICategory>) => {
                state.category = action.payload;
            },
        );
        builder.addMatcher(
            productApi.endpoints.getProductsByCategoryId.matchFulfilled,
            (state, action: PayloadAction<IProductsByCategory>) => {
                state.countProducts = action.payload.countProducts;
                state.products = action.payload.products;
            },
        );
    },
});

export const { setProducts, addProducts, setCountProducts } = catalogSlice.actions;
