import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesSlice } from '@/entities/favorites';

const rootReducer = combineReducers({
    [favoritesSlice.name]: favoritesSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [favoritesSlice.name],
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
