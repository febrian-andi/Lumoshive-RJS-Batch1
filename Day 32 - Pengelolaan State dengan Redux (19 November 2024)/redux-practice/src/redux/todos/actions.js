// src/redux/actions.js
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const editTodo = ({id, text}) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});