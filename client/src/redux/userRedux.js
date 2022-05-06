import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.currentUser = null;
      state.isFetching = true;
      state.error = false;
      console.log("Login Started");
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
      console.log("Successfully logged in");
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = true;
      console.log("Login failed");
    },
  },
});

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
