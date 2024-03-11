import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createSchedule: {
    loading: false,
    error: null,
  },
  scheduleList: {
    data:[],
    loading: false,
    error: null,
    meta:{
    }
  },
};

export const scheduleSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    //create
    createScheduleRequest: (state, action) => {
      state.createSchedule.loading = true;
      state.createSchedule.error = null;
    },
    createScheduleSuccess: (state, action) => {
      state.createSchedule.loading = false;
    },
    createScheduleFailure: (state, action) => {
      const { error } = action.payload;
      state.createSchedule.loading = false;
      state.createSchedule.error = error;
    },
    //create
  getScheduleListRequest: (state, action) => {
      state.scheduleList.loading = true;
      state.scheduleList.error = null;
    },
  getScheduleListSuccess: (state, action) => {
    const {data} = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.data = data;
    },
  getScheduleListFailure: (state, action) => {
      const { error } = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.error = error;
    },
  },
});

export const {
  createScheduleRequest,
  createScheduleSuccess,
  createScheduleFailure,
  getScheduleListRequest,
  getScheduleListSuccess,
  getScheduleListFailure
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
