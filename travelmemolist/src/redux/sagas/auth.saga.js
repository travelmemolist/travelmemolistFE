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
  const {username,password} = action.payload.data;
  try {
    const result = yield axios.post('/register',{
    username,
    password
    });
    console.log(result.status === 409);
    
    yield put(registerSuccess({status:result.status,message:result.message }));
  } catch (e) {
    yield put(registerFailure({ error: "Lỗi" }));
  }
}
function* LoginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("/login", data);
    console.log(result);
    if (result.status === 200) {
      localStorage.setItem('Authorization', result.accessToken);
    }else{
      // 
    }
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
