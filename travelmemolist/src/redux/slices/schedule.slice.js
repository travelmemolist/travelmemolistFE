import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createSchedule: {
    loading: false,
    error: null,
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
  },
});

export const {
  createScheduleRequest,
  createScheduleSuccess,
  createScheduleFailure,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
