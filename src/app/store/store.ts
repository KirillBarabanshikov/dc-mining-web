import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { productsSlice } from '@/entities/product';
import { catalogSlice } from '@/entities/catalog';

const rootReducer = combineReducers({
    [productsSlice.name]: productsSlice.reducer,
    [catalogSlice.name]: catalogSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

const saveSliceToLocalStorage: Middleware = (storeAPI) => (next) => (action) => {
    if (typeof localStorage === 'undefined') return;

    const result = next(action);
    const state = storeAPI.getState();
    const sliceState = state.products;
    localStorage.setItem('products', JSON.stringify(sliceState));
    return result;
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware).concat(saveSliceToLocalStorage),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
