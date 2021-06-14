import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, update } from "../../helpers/apiMethods";
import { getConfig , getConfigSuccess, updateConfigSuccess } from "./actions";
import {
  GET_CORPORATE_CONFIG,
  GET_CORPORATE_CONFIG_SUCCESS,
  UPDATE_CORPORATE_CONFIG,
  UPDATE_CORPORATE_CONFIG_SUCCESS,
} from "./actionTypes";
import { toast } from 'react-toastify';

const corporate_config = "/functionalAdmin/corporate/config/";
function* getConfigApi() {
  try {
    let response = yield call(get, `${corporate_config}`);
    yield put(getConfigSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

function* updateConfig({ payload }) {
  try {
    let response = yield call(
      update,
      `${corporate_config}`,
      payload.newData
    );
    yield put(updateConfigSuccess(response));
    yield put(getConfig());
    toast.success('✔️ Les donneés a été modifié avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error);
    toast.error("❌ Une erreur s'est produite, Les donneés n'a pas été modifié!", {
      position: "top-right",
      autoClose: 2500
    });
  }
}
export function* watchUpdateConfig() {
  yield takeEvery(UPDATE_CORPORATE_CONFIG, updateConfig);
}

export function* watchGetConfig() {
  yield takeEvery(GET_CORPORATE_CONFIG, getConfigApi);
}

function* corporateSaga() {
  yield all([fork(watchGetConfig),fork(watchUpdateConfig)]);
}
export default corporateSaga;
