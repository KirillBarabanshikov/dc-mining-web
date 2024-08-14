import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product';
import { categoryApi, ICategory } from '@/entities/category';
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            categoryApi.endpoints.getCategoryById.matchFulfilled,
            (state, action: PayloadAction<ICategory>) => {
                state.category = action.payload;
            },
        );
        builder.addMatcher(
            filterApi.endpoints.setFilters.matchFulfilled,
            (state, action: PayloadAction<IFilteredData>) => {
                state.countProducts = action.payload.countProducts;
                state.products = action.payload.products;
            },
        );
    },
});

export const {} = catalogSlice.actions;
