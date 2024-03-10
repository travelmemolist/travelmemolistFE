import { fork } from "redux-saga/effects";
import dayActivity from "./dayActivity.saga";
import memory from "./memory.saga";
import schedule from "./schedule.saga";
export default function* rootSaga() {
  yield fork(dayActivity);
  yield fork(memory);
  yield fork(schedule);
}
