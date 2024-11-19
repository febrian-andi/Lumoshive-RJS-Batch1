import { createStore, combineReducers } from "redux";

// Reducer 1: Counter Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Reducer 2: Todo Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
};

// Gabungkan reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

// Buat store dengan rootReducer
const store = createStore(rootReducer);

// Dispatch actions untuk counter
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // Output: { counter: 1, todos: [] }

// Dispatch actions untuk todos
store.dispatch({ type: "ADD_TODO", payload: "Learn Redux" });
store.dispatch({ type: "ADD_TODO", payload: "Build a Project" });
console.log(store.getState());
// Output: { counter: 1, todos: ["Learn Redux", "Build a Project"] }

// Remove a todo
store.dispatch({ type: "REMOVE_TODO", payload: 0 }); // Hapus item pertama
console.log(store.getState());
// Output: { counter: 1, todos: ["Build a Project"] }

// Subscribe ke perubahan state
store.subscribe(() => {
  console.log("State sekarang:", store.getState());
});
