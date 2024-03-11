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
    if(result.status === 409){
    yield put(registerFailure({status:result.status,message:result.message }));
    }
    else {
    yield put(registerSuccess({ }));
    }
    
  } catch (e) {
    yield put(registerFailure({ error: "Lỗi" }));
  }
}
function* LoginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("/login", data);
    if (result.status === 200) {
    yield put(loginSuccess({ data: result.data }));
      localStorage.setItem('Authorization', result.data.accessToken);
      localStorage.setItem("userInfo",JSON.stringify(result.data.accountInfoDTO));  
    yield callback();
    }else{
      yield put(loginFailure({ error: result.message }));
    }
  } catch (e) {
    yield put(loginFailure({ error: "Lỗi" }));
  }
}

export default function* authSaga() {
  yield takeEvery(registerRequest, registerSaga);
  yield takeEvery(loginRequest, LoginSaga);
}
