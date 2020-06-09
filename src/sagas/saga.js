import { takeLatest, put, delay } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(3000); //3초 대기
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
  //put은 특정 액션을 dispatch해준다
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}
