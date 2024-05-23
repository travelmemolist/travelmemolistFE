import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  schedule: {
    data: {},
  },
  createSchedule: {
    loading: false,
    error: null,
  },
  scheduleList: {
    data: [],
    loading: false,
    error: null,
    meta: {},
  },
  scheduleListComplete: {
    data: [],
    loading: false,
    error: null,
    meta: {},
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
      const { data } = action.payload;
      state.createSchedule.loading = false;
      state.schedule.data = data;
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
      const { data } = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.data = data;
    },
    getScheduleListFailure: (state, action) => {
      const { error } = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.error = error;
    },
    // 
    updateStatusRequest: (state, action) => {
      state.scheduleList.loading = true;
      state.scheduleList.error = null;
    },
    updateStatusSuccess: (state, action) => {
      const { data } = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.data = data;
    },
    updateStatusFailure: (state, action) => {
      const { error } = action.payload;
      state.scheduleList.loading = false;
      state.scheduleList.error = error;
    },
    getScheduleByIdRequest: (state, action) =>{
      state.schedule.loading = true;
      state.schedule.error = null;
    },
    getScheduleByIdSuccess: (state, action) =>{
      const { data } = action.payload;
      state.schedule.loading = false;
      state.schedule.data = data;
    },
    getScheduleByIdFailure: (state, action) => {
      const { error } = action.payload;
      state.schedule.loading = false;
      state.schedule.error = error;
    },
  },
});

export const {
  createScheduleRequest,
  createScheduleSuccess,
  createScheduleFailure,
  getScheduleListRequest,
  getScheduleListSuccess,
  getScheduleListFailure,
  updateStatusRequest,
  updateStatusSuccess,
  updateStatusFailure,
  getScheduleByIdRequest,
  getScheduleByIdSuccess,
  getScheduleByIdFailure
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
