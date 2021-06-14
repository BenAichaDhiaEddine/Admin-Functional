import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { get } from "../../helpers/apiMethods";
import { getCategoriesSuccess } from "./actions";
import { GET_ALL_CATEGORIES } from "./actionTypes";

//const url = "/superAdmin/teamType";
const url = "/functionalAdmin/teams";

function* getCategoriesApi() {
  try {
    let result = yield call(get, url);
    yield put(getCategoriesSuccess(result.data));
  } catch (error) {}
}

export function* watchGetCategories() {
  yield takeEvery(GET_ALL_CATEGORIES, getCategoriesApi);
}

function* categoriesSaga() {
  yield all([fork(watchGetCategories)]);
}

export default categoriesSaga;
