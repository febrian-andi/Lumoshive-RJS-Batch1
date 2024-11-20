import axios from "axios";

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";
export const PROCESS_TODO_SUCCESS = "PROCESS_TODO_SUCCESS";
export const SELECT_TODO = "SELECT_TODO";

// action creator
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      const response = await axios.get("http://localhost:3000/todos");
      const data = await response.data;
      dispatch({ type: FETCH_TODO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const addTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.post("http://localhost:3000/todos", data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const selectTodo = (id) => {
  return async (dispatch) => {
    if (id === null) {
      dispatch({ type: SELECT_TODO, payload: null });
      return;
    }
    try {
      const response = await axios.get(`http://localhost:3000/todos/${id}`);
      const data = await response.data;
      dispatch({ type: SELECT_TODO, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const editTodo = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.put(`http://localhost:3000/todos/${data.id}`, data);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};

export const toggleTodo = (data) => {
  const newData = data.completed
    ? { ...data, completed: false }
    : { ...data, completed: true };
  return async (dispatch) => {
    dispatch({ type: FETCH_TODO_REQUEST });
    try {
      await axios.put(`http://localhost:3000/todos/${data.id}`, newData);
      dispatch({ type: PROCESS_TODO_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error.message });
    }
  };
};
