import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    // [sessionSlice.name]: sessionSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [sessionSlice.name],
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
