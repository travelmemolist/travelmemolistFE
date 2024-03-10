import { createSlice } from "@reduxjs/toolkit";

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
      const {message,status} = action.payload;
      if(status === 409){
          state.register.error = message;
      }
      state.register.loading = false;

    },
    registerFailure: (state, action) => {
      const { error } = action.payload;
      state.register.loading = false;
      state.register.error = error;
    },
    //login
    loginRequest: (state, action) => {
      state.login.loading = true;
      state.login.error = null;
    },
    loginSuccess: (state, action) => {
      const { data } = action.payload;
      state.login.loading = false;
      state.userInfo = data;
    },
    loginFailure: (state, action) => {
      const { error } = action.payload;
      state.login.loading = false;
      state.login.error = error;
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
} = authSlice.actions;

export default authSlice.reducer;
