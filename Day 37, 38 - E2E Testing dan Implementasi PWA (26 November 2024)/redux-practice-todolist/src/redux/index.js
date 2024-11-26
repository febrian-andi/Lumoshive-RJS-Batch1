import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todosSlice';
// import todoReducer from "./async/todosSlice";
import languageReducer from "./slices/languageSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const languagePersistConfig = {
  key: "language",
  storage,
};
const persistedLanguageReducer = persistReducer(
  languagePersistConfig,
  languageReducer
);

const rootReducer = combineReducers({
  todos: todoReducer,
  language: persistedLanguageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
