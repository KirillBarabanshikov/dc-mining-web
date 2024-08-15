import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product';
import { ICategory } from '@/entities/category';
import { filterApi } from '@/entities/filter';
import { IFilteredData } from '@/entities/filter/model/types.ts';

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
        setCategory: (state, action: PayloadAction<ICategory>) => {
            state.category = action.payload;
        },
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = [...state.products, ...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            filterApi.endpoints.setFilters.matchFulfilled,
            (state, action: PayloadAction<IFilteredData>) => {
                state.countProducts = action.payload.countProducts;
                state.products = action.payload.products;
            },
        );
    },
});

export const { setCategory, setProducts } = catalogSlice.actions;
