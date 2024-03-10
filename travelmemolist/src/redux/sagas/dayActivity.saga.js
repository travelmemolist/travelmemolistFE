import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
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
import { notification } from "antd";

function* getDayActivityListSaga(action) {
  try {
    // const { scheduleId } = action.payload;
    const result = yield axios.get("http://localhost:4000/dayActivities", {
      params: {
        // scheduleId: scheduleId,
        _embed: "activities",
      },
    });
    yield put(getDayActivityListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getDayActivityListFailure({ error: "Lỗi" }));
  }
}
function* getActivitySaga(action) {
  try {
    const { activityId } = action.payload;
    yield console.log(activityId);
    const result = yield axios.get(
      `http://localhost:4000/activities/${activityId}`,
      {
        params: {},
      }
    );
    yield put(getActivitySuccess({ data: result.data }));
  } catch (e) {
    yield put(getActivityFailure({ error: "Lỗi" }));
  }
}
function* updateActivitySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.patch(
      `http://localhost:4000/activities/${data.id}`,
      {
        startTime: data.startTime.valueOf(),
        endTime: data.endTime.valueOf(),
        ...data,
      }
    );
    yield put(updateActivitySuccess({ data: result.data }));
    yield put(getDayActivityListRequest());
  } catch (e) {
    yield put(updateActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* createActivitySaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post(`http://localhost:4000/activities`, {
      startTime: data.startTime.valueOf(),
      endTime: data.endTime.valueOf(),
      ...data,
    });
    yield put(createActivitySuccess({ data: result.data }));
    yield put(getDayActivityListRequest());
  } catch (e) {
    yield put(createActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* deleteActivitySaga(action) {
  try {
    const { activityId } = action.payload;
    const result = yield axios.delete(
      `http://localhost:4000/activities/${activityId}`
    );
    yield put(deleteActivitySuccess({ data: result.data }));
    yield put(getDayActivityListRequest());
  } catch (e) {
    yield put(deleteActivityFailure("Đã có lỗi xảy ra!"));
  }
}
function* updateDayActivitySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.patch(
      `http://localhost:4000/dayActivities/${data.id}`,
      {
        name: data.name,
      }
    );
    yield put(updateDayActivitySuccess({ data: result.data }));
    yield put(getDayActivityListRequest());
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
