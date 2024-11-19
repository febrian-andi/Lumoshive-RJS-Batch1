import { legacy_createStore as createStore } from "redux";

// state
const initialState = {
  count: [],
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.count + 1;
    case "DECREMENT":
      return state.count - 1;
    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// subscribe
store.subscribe(() => {
  console.log("State sekarang:", store.getState());
});

// dispatch 
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: 1


