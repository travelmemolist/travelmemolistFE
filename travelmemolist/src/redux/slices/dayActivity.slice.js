import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dayActivityList: {
    data: [],
    loading: false,
    error: null,
  },
  activity: {
    data: {},
    loading: false,
    error: null,
  },
  updateActivityData: {
    loading: false,
    error: null,
  },
  createActivity: {
    loading: false,
    error: null,
  },
};

export const dayActivitySlice = createSlice({
  name: "dayActivity",
  initialState,
  reducers: {
    //getDayActivityList
    getDayActivityListRequest: (state, action) => {
      state.dayActivityList.loading = true;
      state.dayActivityList.error = null;
    },
    getDayActivityListSuccess: (state, action) => {
      const { data } = action.payload;
      state.dayActivityList.data = data;
      state.dayActivityList.loading = false;
    },
    getDayActivityListFailure: (state, action) => {
      const { error } = action.payload;
      state.dayActivityList.loading = false;
      state.dayActivityList.error = error;
    },
    //getActivity
    getActivityRequest: (state, action) => {
      state.activity.loading = true;
      state.activity.error = null;
    },
    getActivitySuccess: (state, action) => {
      const { data } = action.payload;
      state.activity.data = data;
      state.activity.loading = false;
    },
    getActivityFailure: (state, action) => {
      const { error } = action.payload;
      state.activity.loading = false;
      state.activity.error = error;
    },
    //createActivity
    createActivityRequest: (state, action) => {
      state.createActivity.loading = true;
      state.createActivity.error = null;
    },
    createActivitySuccess: (state, action) => {
      const { data } = action.payload;
      state.createActivity.data = data;
      state.createActivity.loading = false;
    },
    createActivityFailure: (state, action) => {
      const { error } = action.payload;
      state.createActivity.loading = false;
      state.createActivity.error = error;
    },
    //updateActivity
    updateActivityRequest: (state, action) => {
      state.updateActivityData.loading = true;
      state.updateActivityData.error = null;
    },
    updateActivitySuccess: (state, action) => {
      state.updateActivityData.loading = false;
      const { data } = action.payload;
      state.activity.data = data;
    },
    updateActivityFailure: (state, action) => {
      const { error } = action.payload;
      state.updateActivityData.loading = false;
      state.updateActivityData.error = error;
    },
  },
});

export const {
  getDayActivityListRequest,
  getDayActivityListSuccess,
  getDayActivityListFailure,
  updateActivityRequest,
  updateActivitySuccess,
  updateActivityFailure,
  getActivityRequest,
  getActivitySuccess,
  getActivityFailure,
  createActivityRequest,
  createActivitySuccess,
  createActivityFailure,
} = dayActivitySlice.actions;

export default dayActivitySlice.reducer;
