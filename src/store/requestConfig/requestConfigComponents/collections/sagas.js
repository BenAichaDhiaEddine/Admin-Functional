import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, post } from "../../../../helpers/apiMethods";
import { getCollectionsConfigSuccess, addCollectionsConfigSuccess, addItemsConfigSuccess } from "./actions";
import {
  GET_COLLECTIONS_CONFIG,
  ADD_COLLECTIONS_CONFIG,
  ADD_ITEMS_CONFIG
} from "./actionTypes";

const CollectionsConfig = "/admin/request/collectionCategory";
const ItemsConfig = "/admin/request/collectionItems";

function* getCollectionsConfigApi() {
  try {
    let response = yield call(get, `${CollectionsConfig}`);
    yield put(getCollectionsConfigSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}
function* addCollectionsConfigApi({ payload }) {
  let { oldCollections, payload: data } = payload;
  try {
    let response = yield call(post, `${CollectionsConfig} `, data);
    yield put(addCollectionsConfigSuccess([response, ...oldCollections]));
  } catch (error) { }
}

function* addItemsConfigApi({ payload }) {
  let { id, oldCollections, payload: data } = payload;
  try {
    let response = yield call(post, `${ItemsConfig} `, data);
    const newCollections = oldCollections?.map(item => {
      if (item._id === id) {
        item.collectionItems.unshift(response)
      }
      return item
    })
    yield put(addCollectionsConfigSuccess(newCollections));
  } catch (error) { }
}

export function* watchAddCollectionsConfig() {
  yield takeEvery(ADD_COLLECTIONS_CONFIG, addCollectionsConfigApi);
}

export function* watchGetCollectionsConfig() {
  yield takeEvery(GET_COLLECTIONS_CONFIG, getCollectionsConfigApi);
}

export function* watchAddItemsConfig() {
  yield takeEvery(ADD_ITEMS_CONFIG, addItemsConfigApi);
}

function* corporateSaga() {
  yield all([fork(watchGetCollectionsConfig), fork(watchAddCollectionsConfig),
  fork(watchAddItemsConfig)]);
}
export default corporateSaga;
