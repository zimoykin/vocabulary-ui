import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer from './features/auth/authSlice';
import profileReducer from './features/profile/profileSlice';


// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};


// Create persisted reducers
const persistedReducerAuth = persistReducer(persistConfig, authReducer);
const persistedReducerUser = persistReducer(persistConfig, profileReducer);

const store = configureStore({

  reducer: {
    auth: persistedReducerAuth,
    profile: persistedReducerUser,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
