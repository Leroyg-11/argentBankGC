import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { hostName } from "../api";

export const profileUser = createAsyncThunk(
  "/user/profile",

  async (getToken) => {
    const request = await axios.post(
      `${hostName}/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      }
    );
    const response = await request.data.body;

    return response;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(profileUser.pending, (state) => {
        state.user = null;
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.user = null;
        console.log(action.error.message);
      });
  },
});

export default profileSlice.reducer;
