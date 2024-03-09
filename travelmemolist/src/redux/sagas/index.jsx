import { fork } from "redux-saga/effects";
import dayActivity from "./dayActivity.saga";
import memory from "./memory.saga";
export default function* rootSaga() {
  yield fork(dayActivity);
  yield fork(memory);
}
