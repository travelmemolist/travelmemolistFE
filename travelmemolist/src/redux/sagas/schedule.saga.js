import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
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
  getScheduleByIdFailure,
  getScheduleListCompleteRequest,
  getScheduleListCompleteSuccess,
  getScheduleListCompleteFailure,
  getImageScheduleListCompleteRequest,
  getImageScheduleListCompleteSuccess,
  getImageScheduleListCompleteFailure
} from "../slices/schedule.slice";
import { notification } from "antd";

function* createScheduleSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("/schedules/create-schedules", data);
    yield put(createScheduleSuccess({ data: result }));
    yield callback(result.schedulesId);
    yield notification.success({ message: "tạo lịch trình thành công!" });
  } catch (e) {
    yield put(createScheduleFailure({ error: "Lỗi" }));
  }
}
function* getScheduleListSaga(action) {
  try {
    const { userId, title, page } = action.payload;
    // console.log("getScheduleListSaga", title);
    const result = yield axios.get(
      `/schedules?title=${title ? title : ""}&userid=${userId}&page=${page ? page : 0
      }`
    );
    yield put(getScheduleListSuccess({ data: result }));
  } catch (e) {
    yield put(getScheduleListFailure({ error: "Lỗi" }));
  }
}

function* updateStateScheduleSage(action) {
  try {

    const { scheduleId } = action.payload;
    const result = yield axios.put(`/schedules/${scheduleId}`);
    yield put(updateStatusSuccess({ data: result }));
  } catch (e) {
    yield put(updateStatusFailure({ error: "Lỗi" }));
  }
}


function* getScheduleByIdSage(action) {
  try {
    const { scheduleId } = action.payload;
    const result = yield axios.get(`/schedules/get_by_id/${scheduleId}`);
    yield put(getScheduleByIdSuccess({ data: result }));
  } catch (e) {
    yield put(getScheduleByIdFailure({ error: "Lỗi" }));
  }
}

function* getScheduleListCompleteSaga(action) {
  try {
    const { userId, title, page } = action.payload;
    const result = yield axios.get(
      `/schedules/completed_schedules?title=${title ? title : ""}&userid=${userId}&page=${page ? page : 0}`
    );
    yield put(getScheduleListCompleteSuccess({ data: result}));
  } catch (e) {
    yield put(getScheduleListCompleteFailure({ error: "Lỗi" }));
  }
}

function* getImageScheduleListCompleteSaga(action) {
  try {
    const { scheduleId } = action.payload;
    console.log(action);
    const result = yield axios.get(
      `/schedules/image_schedule/${scheduleId}`
    );
    console.log({result});
    yield put(getImageScheduleListCompleteSuccess({ data: result}));
  } catch (e) {
    yield put(getImageScheduleListCompleteFailure({ error: "Lỗi" }));
  }
}


export default function* ScheduleSaga() {
  yield takeEvery(createScheduleRequest, createScheduleSaga);
  yield takeEvery(getScheduleListRequest, getScheduleListSaga);
  yield takeEvery(updateStatusRequest,updateStateScheduleSage);
  yield takeEvery(getScheduleByIdRequest,getScheduleByIdSage);
  yield takeEvery(getScheduleListCompleteRequest,getScheduleListCompleteSaga);
  yield takeEvery(getImageScheduleListCompleteRequest,getImageScheduleListCompleteSaga);
}
