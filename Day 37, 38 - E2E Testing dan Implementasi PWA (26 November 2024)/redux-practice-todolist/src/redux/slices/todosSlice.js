import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  currentTodo: {},
  isUpdate: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    currentTodo: (state, action) => {
        state.isUpdate = true;
        state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.text = text;
            state.isUpdate = false;
        }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, updateTodo, currentTodo } = todosSlice.actions;

export default todosSlice.reducer;
