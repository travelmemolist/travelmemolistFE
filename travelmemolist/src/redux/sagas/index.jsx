import { fork } from "redux-saga/effects";
import dayActivity from "./dayActivity.saga";
export default function* rootSaga() {
  yield fork(dayActivity);
}
