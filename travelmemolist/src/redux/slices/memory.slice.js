import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadMemory: {
    loading: false,
    error: null,
  },
  memoryList: {
    data: [],
    loading: false,
    error: null,
    meta: {},
  },
};

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    //getMemory
    getMemoryRequest: (state, action) => {
      state.memoryList.loading = true;
      state.memoryList.error = null;
    },
    getMemorySuccess: (state, action) => {
      const { data, meta, more } = action.payload;
      state.memoryList.loading = false;
      state.memoryList.data = more ? [...state.memoryList.data, ...data] : data;
      state.memoryList.meta = meta;
    },
    getMemoryFailure: (state, action) => {
      const { error } = action.payload;
      state.memoryList.loading = false;
      state.memoryList.error = error;
    },
    //uploadMemory
    uploadMemoryRequest: (state, action) => {
      state.uploadMemory.loading = true;
      state.uploadMemory.error = null;
    },
    uploadMemorySuccess: (state, action) => {
      const { data } = action.payload;
      state.uploadMemory.loading = false;
      state.memoryList.data = [...state.memoryList.data, data];
    },
    uploadMemoryFailure: (state, action) => {
      const { error } = action.payload;
      state.uploadMemory.loading = false;
      state.uploadMemory.error = error;
    },
  },
});

export const {
  uploadMemoryRequest,
  uploadMemorySuccess,
  uploadMemoryFailure,
  getMemoryRequest,
  getMemorySuccess,
  getMemoryFailure,
} = memorySlice.actions;

export default memorySlice.reducer;
