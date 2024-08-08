import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, TProductCardViewMode } from '@/entities/product';

interface IInitialState {
    favorites: IProduct[];
    compare: number[];
    viewMode: TProductCardViewMode;
}

const initialState: IInitialState = {
    favorites: [],
    compare: [],
    viewMode: 'tile',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearFavorites: (state) => {
            state.favorites = [];
        },
        clearCompare: (state) => {
            state.compare = [];
        },
        toggleFavorite: (state, action: PayloadAction<IProduct>) => {
            if (state.favorites.find((product) => product.id === action.payload.id)) {
                state.favorites = state.favorites.filter((product) => product.id !== action.payload.id);
            } else {
                state.favorites = [...state.favorites, action.payload];
            }
        },
        toggleCompare: (state, action: PayloadAction<number>) => {
            if (state.compare.includes(action.payload)) {
                state.compare = state.compare.filter((id) => id !== action.payload);
            } else {
                state.compare = [...state.compare, action.payload];
            }
        },
    },
});

export const { clearFavorites, clearCompare, toggleFavorite, toggleCompare } = productsSlice.actions;