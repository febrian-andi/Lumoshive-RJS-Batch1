import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
});

export const getTodoById = createAsyncThunk("todos/getTodoById", async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (todo) => {
  const { id, completed } = todo;
  const response = await axios.patch(`${API_URL}/${id}`, { completed: !completed });
  return response.data;
});

const initialState = {
  todos: [],
  currentTodo: {},
  isUpdate: false,
  loading: false,
  error: null,
  isSuccess: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // extraReducers for fetchTodos
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for addTodo
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(addTodo.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for updateTodo
    builder
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(updateTodo.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
        state.isUpdate = false;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for deleteTodo
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteTodo.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for getTodoById
    builder
      .addCase(getTodoById.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.isUpdate = false;
      })
      .addCase(getTodoById.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.isUpdate = true;
        state.currentTodo = action.payload;
      })
      .addCase(getTodoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for toggleTodo
    builder
      .addCase(toggleTodo.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default todosSlice.reducer;
