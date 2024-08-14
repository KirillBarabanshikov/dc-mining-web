import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product';
import { ICategory } from '@/entities/category';

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
        setCategory: (state, action: PayloadAction<ICategory | undefined>) => {
            state.category = action.payload;
        },
        setCountProducts: (state, action: PayloadAction<number>) => {
            state.countProducts = action.payload;
        },
    },
});

export const { setProducts, addProducts, setCategory, setCountProducts } = catalogSlice.actions;
