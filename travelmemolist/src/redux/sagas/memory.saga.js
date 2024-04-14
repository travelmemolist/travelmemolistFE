import { put, takeEvery } from "redux-saga/effects";
import axios from "../../config/AxiosConfig";
import {
  uploadMemoryRequest,
  uploadMemorySuccess,
  uploadMemoryFailure,
  getMemoryRequest,
  getMemorySuccess,
  getMemoryFailure,
} from "../slices/memory.slice";

function* uploadMemorySaga(action) {
  try {
    const { data } = action.payload;

    const result = yield axios.post("/images/create_images", data);
    yield put(uploadMemorySuccess({ data: result.data }));
  } catch (e) {
    yield put(uploadMemoryFailure({ error: "Lỗi" }));
  }
}
function* getMemorySaga(action) {
  try {
    const { activityId, more, limit, page } = action.payload;
    const result = yield axios.get(`/images/${activityId}`);
    yield put(
      getMemorySuccess({
        data: result,
        // meta: {
        //   limit: limit,
        //   total: parseInt(result.headers["x-total-count"]),
        //   page: page,
        // },
        // more,
      })
    );
  } catch (e) {
    yield put(getMemoryFailure({ error: "Lỗi" }));
  }
}

export default function* memorySaga() {
  yield takeEvery(uploadMemoryRequest, uploadMemorySaga);
  yield takeEvery(getMemoryRequest, getMemorySaga);
}
