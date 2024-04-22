import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    isAuthenticated: false,
    user: null,
  },
];

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUP: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logIn: (state, action) => {
      state[0].isAuthenticated = true;
      state[0].user = action.payload;
    },
  },
});

export const { signUP, logIn } = userSlice.actions;
export default userSlice.reducer;
