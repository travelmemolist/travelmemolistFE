import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
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
  deleteActivityFailure,
  deleteActivityRequest,
  deleteActivitySuccess,
  updateDayActivityRequest,
  updateDayActivitySuccess,
  updateDayActivityFailure,
} from "../slices/dayActivity.slice";

function* getDayActivityListSaga(action) {
  try {
    const { scheduleId } = action.payload;
    const result = yield axios.get(
      `/schedules/get-day-activities/${scheduleId}`
    );
    yield put(getDayActivityListSuccess({ data: result }));
  } catch (e) {
    yield put(getDayActivityListFailure({ error: "Lỗi" }));
  }
}
function* getActivitySaga(action) {
  try {
    const { activityId } = action.payload;
    const result = yield axios.get(`activities/detail/${activityId}`);
    yield put(getActivitySuccess({ data: result }));
  } catch (e) {
    yield put(getActivityFailure({ error: "Lỗi" }));
  }
}
function* updateActivitySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.put(`/activities/${data.id}`, {
      startTime: data.startTime.valueOf(),
      endTime: data.endTime.valueOf(),
      ...data,
    });
    yield put(updateActivitySuccess({ data: result }));
    yield put(getDayActivityListRequest({ scheduleId: data.scheduleId }));
  } catch (e) {
    yield put(updateActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* createActivitySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.post(`/activities/create-activity`, {
      startTime: data.startTime.valueOf(),
      endTime: data.endTime.valueOf(),
      ...data,
    });
    yield put(createActivitySuccess({ data: result.data }));
    yield put(getDayActivityListRequest({ scheduleId: data.scheduleId }));
  } catch (e) {
    yield put(createActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* deleteActivitySaga(action) {
  try {
    const { activityId, scheduleId } = action.payload;
    console.log(activityId);
    const result = yield axios.delete(`/activities/${activityId}`);
    yield put(deleteActivitySuccess({ data: result }));
    yield put(getDayActivityListRequest({ scheduleId: scheduleId }));
  } catch (e) {
    yield put(deleteActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* updateDayActivitySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.put(`/dayofactivies/update`, {
      nameDayActivities: data.nameDayActivities,
      activitiesId: data.idDayActivities,
    });

    yield put(updateDayActivitySuccess({ data: result }));
    yield put(getDayActivityListRequest({ scheduleId: data.scheduleId }));
  } catch (e) {
    yield put(updateDayActivityFailure("Đã có lỗi xảy ra!"));
  }
}

export default function* ReviewSaga() {
  yield takeEvery(getDayActivityListRequest, getDayActivityListSaga);
  yield takeEvery(updateActivityRequest, updateActivitySaga);
  yield takeEvery(getActivityRequest, getActivitySaga);
  yield takeEvery(createActivityRequest, createActivitySaga);
  yield takeEvery(deleteActivityRequest, deleteActivitySaga);
  yield takeEvery(updateDayActivityRequest, updateDayActivitySaga);
}
