import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggingIn: false,
    isLoggingOut: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    isAdminAuthenticated: false,
    user: {},
  },
  reducers: {
    LOGIN_REQUEST: (state) => {
      state.isLoggingIn = true;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoggingIn = false;
    },
    ADMIN_LOGIN_SUCCESS: (state, action) => {
      state.isAdminAuthenticated = true;
      state.user = action.payload;
      state.isLoggingIn = false;
    },
    LOGIN_FAILURE: (state) => {
      state.isAuthenticated = false;
      state.loginError = true;
      state.isLoggingIn = false;
    },
    LOGOUT_REQUEST: (state) => {
      state.isLoggingOut = true;
    },
    LOGOUT_SUCCESS: (state) => {
      state.isAuthenticated = false;
      state.isAdminAuthenticated = false;
      state.isLoggingOut = false;
      state.logoutError = false;
      state.user = null;
    },
    LOGOUT_FAILURE: (state) => {
      state.isAuthenticated = false;
      state.isLoggingOut = false;
      state.logoutError = true;
    },
  },
});

export const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ADMIN_LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = authSlice.actions;

export default authSlice.reducer;
