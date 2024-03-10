import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../slices/dayActivity.slice";
import { notification } from "antd";

function* registerSaga(action) {
  try {
    // const { scheduleId } = action.payload;
    const result = yield axios.get("http://localhost:4000/dayActivities", {
      params: {
        // scheduleId: scheduleId,
        _embed: "activities",
      },
    });
    yield put(registerSuccess({ data: result.data }));
  } catch (e) {
    yield put(registerFailure({ error: "Lỗi" }));
  }
}


export default function* ReviewSaga() {
  yield takeEvery(registerRequest, registerSaga);
}
