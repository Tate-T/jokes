import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";

import { filterReducer } from './filterReducer';
import jokesReducer from './jokesReducer';

const jokesConfig = {
    key: "jokes",
    storage,
    whitelist: ["favJokes"]
};

export const store = configureStore({
    reducer: {
        jokes: persistReducer(jokesConfig,jokesReducer) ,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production', // true
});

export const persistor = persistStore(store);