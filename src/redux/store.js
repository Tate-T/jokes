import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {jokesApi} from './jokesApi';

import { setupListeners } from '@reduxjs/toolkit/query';

import { filterReducer } from './filterReducer';

export const store = configureStore({
    reducer: {
        [jokesApi.reducerPath]: jokesApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(jokesApi.middleware);
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});
setupListeners(store.dispatch)