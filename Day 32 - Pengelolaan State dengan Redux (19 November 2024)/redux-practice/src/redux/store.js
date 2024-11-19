import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./todos/reducer";
import languageReducer from "./language/reducer";
import themeReducer from "./theme/reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  lang: languageReducer,
  theme: themeReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
