import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import AuthSliceReducer from './slices/authSlice';
import question from './slices/questionSlice';
import answer from './slices/answerSlice';
import loading from './slices/loadingSlice';
import { persistReducer, persistStore } from 'redux-persist';
import knowledge from './slices/knowledgeSlice';
import developer from './slices/developerSlice';
import modal from './slices/modalSlice';
const persistConfig = {
  key: 'root',
  storage,
};

const authSlice = persistReducer(persistConfig, AuthSliceReducer);

export const store = configureStore({
  reducer: {
    authSlice,
    question,
    loading,
    answer,
    knowledge,
    developer,
    modal,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
