import { createSlice } from "@reduxjs/toolkit";

const userState = {
  loading: false,
  loadingEvent: false,
  user: null,
  error: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: "User",
  initialState: userState,
  reducers: {
    reset(state) {
      localStorage.removeItem("isLogin");
      return {
        ...state,
        loading: false,
        loadingEvent: false,
        user: null,
        error: null,
        isLogin: false,
      };
    },
    loading(state) {
      return { ...state, loading: true, error: null };
    },
    registerSuccess(state) {
      return { ...state, loading: false, error: null };
    },
    loadUserSuccess(state, action) {
      return { ...state, user: action.payload, isLogin: true };
    },
    loginSuccess(state) {
      return { ...state, loading: false, error: null };
    },
    forgotPasswordSuccess(state) {
      return { ...state, loading: false, error: null };
    },
    error(state, action) {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const userReducerActions = userSlice.actions;

export default userSlice.reducer;
