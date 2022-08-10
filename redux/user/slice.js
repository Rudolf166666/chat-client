import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isAuthorized: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      return { ...state, data: action.payload, isAuthorized: true };
    },
    loggedOut: (state, action) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return { ...state, data: {}, isAuthorized: false };
    },
    setUnauthorized: (state, action) => {
      return { ...state, isAuthorized: false };
    },
  },
});

export const { updateUserInfo, loggedOut, setUnauthorized } = userSlice.actions;

export default userSlice.reducer;
