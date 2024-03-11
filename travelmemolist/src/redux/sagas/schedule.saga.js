import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
  createScheduleRequest,
  createScheduleSuccess,
  createScheduleFailure,
  getScheduleListRequest,
  getScheduleListSuccess,
  getScheduleListFailure,
} from "../slices/schedule.slice";
import { notification } from "antd";

function* createScheduleSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("/schedules/create-schedules", data);
    yield put(createScheduleSuccess({ data: result.data }));
    // yield callback(result.schedulesId);
    yield notification.success({ message: "tạo lịch trình thành công!" });
  } catch (e) {
    yield put(createScheduleFailure({ error: "Lỗi" }));
  }
}
function* getScheduleListSaga(action) {
  try {
    const { userId, searchKey, page } = action.payload;
    const result = yield axios.get(`/schedules?title=&userid=1&page=`);
    yield console.log(result.content);
    yield put(getScheduleListSuccess({ data: result }));
  } catch (e) {
    yield put(getScheduleListFailure({ error: "Lỗi" }));
  }
}

export default function* ScheduleSaga() {
  yield takeEvery(createScheduleRequest, createScheduleSaga);
  yield takeEvery(getScheduleListRequest, getScheduleListSaga);
}
