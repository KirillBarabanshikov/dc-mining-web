import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, TProductCardViewMode } from '@/entities/product';

type TInitialState = {
    favorites: IProduct[];
    compare: number[];
    recent: IProduct[];
    viewMode: TProductCardViewMode;
};

const initialState: TInitialState = {
    favorites: [],
    compare: [],
    recent: [],
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
        addToRecent: (state, action: PayloadAction<IProduct>) => {
            if (state.recent.find((product) => product.id === action.payload.id)) return;
            if (state.recent.length >= 10) {
                state.recent = [action.payload, ...state.recent.slice(1)];
                return;
            }
            state.recent = [action.payload, ...state.recent];
        },
    },
});

export const { clearFavorites, clearCompare, toggleFavorite, toggleCompare, addToRecent } = productsSlice.actions;
