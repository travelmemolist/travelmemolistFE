import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../slices/auth.slice";
import { notification } from "antd";

function* registerSaga(action) {
  try {
    const result = yield axios.post("http://localhost:4000/users");
    yield put(registerSuccess({ data: result.data }));
  } catch (e) {
    yield put(registerFailure({ error: "Lỗi" }));
  }
}
function* LoginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/users", data);
    yield put(loginSuccess({ data: result.data }));
    yield callback();
  } catch (e) {
    yield put(loginFailure({ error: "Lỗi" }));
  }
}

export default function* authSaga() {
  yield takeEvery(registerRequest, registerSaga);
  yield takeEvery(loginRequest, LoginSaga);
}
