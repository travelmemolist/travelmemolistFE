import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  userInfo: {},
  register: {
    loading: false,
    error: null,
  },
  login: {
    loading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //register
    registerRequest: (state, action) => {
      state.register.loading = true;
      state.register.error = null;
    },
    registerSuccess: (state, action) => {
      const {} = action.payload;
      state.register.loading = false;
      notification.success({ message: "Đăng ký thành công!" });
    },
    registerFailure: (state, action) => {
      const { error, message, status } = action.payload;
      state.register.loading = false;
      if (status === 409) {
        state.register.error = message;
      } else {
        state.register.error = error;
      }
    },
    //login
    loginRequest: (state, action) => {
      state.login.loading = true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      const { data } = action.payload;
      state.login.loading = false;
      state.userInfo.data = data?.accountInfoDTO;
    },
    loginFailure: (state, action) => {
      const { error } = action.payload;
      state.login.loading = false;
      state.login.error = error;
    },
    updateUserInfo: (state, action) => {
      const { data } = action.payload;
      state.userInfo.data = data;
    },
    logout: (state, action) => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("userInfo");
      state.userInfo.data = {};
      state.userInfo.accountInfoDTO = {};
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  updateUserInfo,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
