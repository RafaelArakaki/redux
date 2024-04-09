import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducers from './combines';

import type { ReducerUserPayload } from '../../types/user';

const customizedMiddleware = {
  serializableCheck: false,
};

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createAppStore = (initialState?: object) => configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(customizedMiddleware),
  preloadedState: initialState as ReducerUserPayload,
});

export const store = createAppStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof configureStore>;

export type RootDispatch = typeof store.dispatch;
