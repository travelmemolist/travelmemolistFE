import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  createScheduleRequest,
  createScheduleSuccess,
  createScheduleFailure,
} from "../slices/schedule.slice";
import { notification } from "antd";

function* createScheduleSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/schedules", data);
    yield put(createScheduleSuccess({ data: result.data }));
    yield callback(result.data.id);
    yield notification.success({ message: "tạo lịch trình thành công!" });
  } catch (e) {
    yield put(createScheduleFailure({ error: "Lỗi" }));
  }
}

export default function* ScheduleSaga() {
  yield takeEvery(createScheduleRequest, createScheduleSaga);
}
