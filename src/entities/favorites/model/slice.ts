import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product';
import { RootState } from '@/app/store';

interface IInitialState {
    products: IProduct[];
}

const initialState: IInitialState = {
    products: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        clearFavorites: (state) => {
            state.products = [];
        },
        toggleFavorite: (state, action: PayloadAction<IProduct>) => {
            console.log(!!state.products.find((product) => product.id === action.payload.id));

            if (!!state.products.find((product) => product.id === action.payload.id)) {
                state.products = state.products.filter((product) => product.id !== action.payload.id);
            } else {
                state.products = [...state.products, action.payload];
            }
        },
    },
});

export const selectFavorites = (state: RootState) => state.products;

export const { clearFavorites, toggleFavorite } = favoritesSlice.actions;
