import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/entities/product';
import { productApi } from '../api';

type TInitialState = {
    favorites: IProduct[];
    compare: number[];
    recent: IProduct[];
    viewMode: 'tile' | 'simple';
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
        setViewMode: (state, action: PayloadAction<'tile' | 'simple'>) => {
            state.viewMode = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productApi.endpoints.getProductById.matchFulfilled,
            (state, action: PayloadAction<IProduct>) => {
                let recentProducts = state.recent;

                if (recentProducts.find((product) => product.id === action.payload.id)) {
                    recentProducts = recentProducts.filter((product) => product.id !== action.payload.id);
                }

                if (recentProducts.length >= 10) {
                    recentProducts = recentProducts.slice(0, -1);
                }

                state.favorites = state.favorites.map((product) => {
                    if (product.id === action.payload.id) {
                        return action.payload;
                    }
                    return product;
                });

                state.recent = [action.payload, ...recentProducts];
            },
        );
    },
});

export const { clearFavorites, clearCompare, toggleFavorite, toggleCompare, setViewMode } = productsSlice.actions;
