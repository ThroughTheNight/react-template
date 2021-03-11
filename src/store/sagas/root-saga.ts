import { takeEvery, put, all, call } from "redux-saga/effects";

export const DECREMENT_COUNT_ASYNC = 'DECREMENT_COUNT_ASYNC';

function* watchDecrementCount() {
  yield takeEvery('DECREMENT_COUNT_ASYNC', decrementCount);
}

function* decrementCount() {
  yield put({ type: 'DECREMENT_COUNT' });
}

export default function* rootSaga() {
  yield all([
    call(watchDecrementCount)
  ]);
}