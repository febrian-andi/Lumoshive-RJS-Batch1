import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";
import subscribeReducer from "./subscribe/subscribeSlice";

const themPersistConfig = {
  key: "isDarkMode",
  storage,
};

const persitedThemeReducer = persistReducer(themPersistConfig, themeReducer);

const rootReducer = combineReducers({
  isDarkMode: persitedThemeReducer,
  subscribe: subscribeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
