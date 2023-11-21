import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostName } from "../api";

export const loginUser = createAsyncThunk(
  "/user/login",
  async (userCredentials) => {
    const request = await axios.post(`${hostName}/user/login`, userCredentials);
    const response = await request.data.body.token;
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = action.error.message;
        // console.log(action.error.message);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
