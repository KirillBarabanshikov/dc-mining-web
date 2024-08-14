import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from '@/shared/api';
import { productsSlice } from '@/entities/product';
import { catalogSlice } from '@/entities/catalog';

const rootReducer = combineReducers({
    [productsSlice.name]: productsSlice.reducer,
    [catalogSlice.name]: catalogSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [productsSlice.name],
};

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
