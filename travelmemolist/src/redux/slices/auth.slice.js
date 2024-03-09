import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
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
      state.register.loading = false;
    },
    registerFailure: (state, action) => {
      const { error } = action.payload;
      state.register.loading = false;
      state.register.error = error;
    },
  },
});

export const { registerRequest, registerSuccess, registerFailure } =
  authSlice.actions;

export default authSlice.reducer;
