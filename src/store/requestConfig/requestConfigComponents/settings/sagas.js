import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, post, remove ,update} from "../../../../helpers/apiMethods";
import {getCreditById} from "../../../credit/action"
import { getConditionConfigSuccess, addConditionConfigSuccess, deleteConditionSuccess ,getConditionConfig} from "./actions";
import {
  GET_CONDITION_CONFIG,
  ADD_CONDITION_CONFIG,
  UPDATE_CONDITION_CONFIG,
  DELETE_CONDITION
} from "./actionTypes";
import { toast } from 'react-toastify';

const ConditionConfigAdd = "/functionalAdmin/requestConfig/addCondition";
const ConditionConfig= "/functionalAdmin/requestConfig/conditions/condition";

function* getConditionConfigApi() {
  try {
    let response = yield call(get, `${ConditionConfig}`);
    yield put(getConditionConfigSuccess(response.data));
    
  } catch (error) {
    console.error(error);
  }
}
function* addConditionConfigApi({ payload }) {
  let { oldCondition, payload: dataa } = payload;
  try {
    let{ IdRequest} =payload.payload
    let response = yield call(post, `${ConditionConfigAdd}/${IdRequest}`, dataa);
    yield put(getCreditById(IdRequest));
    toast.success('✔️ Condition a été ajouté avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error.message);
    toast.error("❌ Une erreur s'est produite, Condition n'a pas été ajouté!", {
      position: "top-right",
      autoClose: 2500
    });
   }
}
function* updateConditionConfigApi({ payload }) {
  let { oldCondition, id, payload: data } = payload;
  try {
    let response = yield call(update, `${ConditionConfig}/${id._id}`, data);
    yield put(getCreditById(id.IdRequest));
    toast.success('✔️ Condition a été modifié avec succès!', {
      position: "top-right",
      autoClose: 2500
    });

  } catch (error) {
    console.error(error.message);
    toast.error("❌ Une erreur s'est produite, Condition n'a pas été modifié!", {
      position: "top-right",
      autoClose: 2500
    });
   }
}

function* deleteConditionConfigApi( {payload} ) {
  try {
    let {_id, IdRequest} =payload;
    yield call(remove, `${ConditionConfig}/${_id}`);
    yield put(deleteConditionSuccess());
    yield put(getCreditById(IdRequest));
    toast.success('✔️ Condition a été supprimé avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error.message);
    toast.error("❌ Une erreur s'est produite, Condition n'a pas été supprimé!", {
      position: "top-right",
      autoClose: 2500
    });
  }}
  
export function* watchAddConditionConfig() {
  yield takeEvery(ADD_CONDITION_CONFIG, addConditionConfigApi);
}

export function* watchGetConditionConfig() {
  yield takeEvery(GET_CONDITION_CONFIG, getConditionConfigApi);
}

export function* watchUpdateConditionConfig() {
  yield takeEvery(UPDATE_CONDITION_CONFIG, updateConditionConfigApi);
}

export function* watchDeleteConditionConfig() {
  yield takeEvery(DELETE_CONDITION, deleteConditionConfigApi);
}

function* corporateSaga() {
  yield all([
    fork(watchGetConditionConfig), 
    fork(watchAddConditionConfig), 
    fork(watchUpdateConditionConfig), 
    fork(watchDeleteConditionConfig)
  ]);
}
export default corporateSaga;
