import { all, call, put, takeLatest } from "redux-saga/effects";
import { createTodoSaga, deleteTodoSaga, filterTodoSaga, updateTodoSaga } from "./app.actions";

export function* onCreateTodoSaga({ payload }) {
  yield put(createTodoSaga(payload));
}
export function* onUpdateTodoSaga({ payload }) {
  yield put(updateTodoSaga(payload));
}
export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}
export function* onFilterTodoSaga({ payload}) {
  yield put(filterTodoSaga(payload));
}



export function* onCreate() {
  yield takeLatest("CREATE_TODO", onCreateTodoSaga);
}
export function* onUpdate() {
  yield takeLatest("UPDATE_TODO", onUpdateTodoSaga);
}
export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}
export function* onFilter() {
  yield takeLatest("FILTER_TODO", onFilterTodoSaga);
}





export function* todos() {
  yield all([call(onCreate), call(onUpdate), call(onDelete), call(onFilter)]);
}
