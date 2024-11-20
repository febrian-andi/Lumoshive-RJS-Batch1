import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./todos/reducer";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_SECRET_KEY,
    onError: function (error) {
        console.error("encryption error: ", error);
    },
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logMiddleware = (store) => (next) => (action) => {
  console.log("Action: ", action);
  next(action);
};

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logMiddleware))
);

const persistor = persistStore(store);

export {store, persistor};
