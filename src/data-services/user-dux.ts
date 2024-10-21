import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userDuxTypes } from "./user-dux.types";
import { currentUser } from "../api-client/auth-request";
import { Dux } from "../redux/dux";

export const userActions = {
  loadCurrentUser: createAsyncThunk(
    userDuxTypes.CURRENT_USER_LOAD,
    async () => {
      const response = await currentUser();
      return response.data.data;
    },
  ),
};

const userSlice = createSlice({
  name: Dux.User,
  initialState: {
    data: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userActions.loadCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(userActions.loadCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userActions.loadCurrentUser.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default userSlice.reducer;
