import { userReducerActions } from "../reducers/user.reducer";
import { registerUserApi, loadUserApi, loginUserApi, forgotPasswordApi } from "../api/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload: any, { dispatch }) => {
    dispatch(userReducerActions.loading());
  try {
        await registerUserApi(payload.user);
        dispatch(userReducerActions.registerSuccess());
        payload.navigate('/verify');
    } catch (error: any) {
      if (error.response && error.response.data) {
        dispatch(userReducerActions.error(error.response.data));
      }
    }
  }
);

const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: any, { dispatch }) => {
    dispatch(userReducerActions.loading());
  try {
        await loginUserApi(payload.user);
        dispatch(userReducerActions.loginSuccess());
        localStorage.setItem('isLogin', 'on');
        payload.navigate('/');
    } catch (error: any) {
      if (error.response && error.response.data) {
        dispatch(userReducerActions.error(error.response.data));
      }
    }
  }
);

const loadUser = createAsyncThunk('user/loadUser', async (_, { dispatch }) => {
  try {
    const { data } = await loadUserApi();
    dispatch(userReducerActions.loadUserSuccess(data))
    localStorage.setItem('isLogin', 'on');
  }catch (error: any) {
    dispatch(userReducerActions.reset());
  }
})

const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (payload: any, { dispatch }) => {
    dispatch(userReducerActions.loading());
  try {
        await forgotPasswordApi({ email: payload.email });
        dispatch(userReducerActions.forgotPasswordSuccess());
        payload.navigate('/verify');
    } catch (error: any) {
      if (error.response && error.response.data) {
        dispatch(userReducerActions.error(error.response.data));
      }
    }
  }
);

const userActs = {
    registerUser,
    loadUser,
    loginUser,
    forgotPassword
}

export default userActs;
