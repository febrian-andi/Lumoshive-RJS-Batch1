import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const addSubscribe = createAsyncThunk("subscribe/addSubscribe", async (email) => {
  const response = await axios.post(`${API_URL}/subscribe`, {
    email: email,
  });
  return response.data;
});

const initialState = {
  subscribe: [],
  loading: false,
  error: null,
  isSuccess: false,
};

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // extraReducers for add subscribe
    builder
      .addCase(addSubscribe.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(addSubscribe.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(addSubscribe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default subscribeSlice.reducer;