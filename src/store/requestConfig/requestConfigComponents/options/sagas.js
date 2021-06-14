import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, post, remove ,update} from "../../../../helpers/apiMethods";
import {getCreditById} from "../../../credit/action"
import { getOptionConfigSuccess, addOptionConfigSuccess, deleteOptionSuccess ,getOptionConfig} from "./actions";
import {
  GET_OPTION_CONFIG,
  ADD_OPTION_CONFIG,
  UPDATE_OPTION_CONFIG,
  DELETE_OPTION
} from "./actionTypes";
import { toast } from 'react-toastify';

const OptionConfigAdd = "/functionalAdmin/requestConfig/addOption";
const OptionConfig= "/functionalAdmin/requestConfig/options/option";

function* getOptionConfigApi() {
  try {
    let response = yield call(get, `${OptionConfig}`);
    yield put(getOptionConfigSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
}
function* addOptionConfigApi({ payload }) {
  let { oldOption, payload: dataa } = payload;
  try {
    let{ IdRequest} =payload.payload
    let response = yield call(post, `${OptionConfigAdd}/${IdRequest}`, dataa);
    yield put(addOptionConfigSuccess([response, ...oldOption]));
    yield put(getCreditById(IdRequest));
    toast.success('✔️ Option a été ajouté avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error);
    toast.error("❌ erreur s'est produite, Option n'a pas été ajouté!", {
      position: "top-right",
      autoClose: 2500
    });
   }
}
function* updateOptionConfigApi({ payload }) {
  let { oldOption, id, payload: data } = payload;
  try {
    let response = yield call(update, `${OptionConfig}/${id._id}`, data);
    
    const newOptionList = oldOption.map(item => {
      if (item._id === response._id) {
        item = response
      }
      return item
    })
    yield put(addOptionConfigSuccess(newOptionList));
    yield put(getCreditById(id.IdRequest));
    toast.success('✔️ Option a été modifié avec succès!', {
      position: "top-right",
      autoClose: 2500
    });

  } catch (error) {
    console.error(error);
    toast.error("❌ erreur s'est produite, Option n'a pas été modifié!", {
      position: "top-right",
      autoClose: 2500
    });
   }
}

function* deleteOptionConfigApi( {payload} ) {
  try {
    let {_id, IdRequest} =payload;
    yield call(remove, `${OptionConfig}/${_id}`);
    yield put(deleteOptionSuccess());
    yield put(getCreditById(IdRequest));
    toast.success('✔️ Option a été supprimé avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error);
    toast.error("❌ erreur s'est produite, Option n'a pas été supprimé!", {
      position: "top-right",
      autoClose: 2500
    });
  }}
  
export function* watchAddOptionConfig() {
  yield takeEvery(ADD_OPTION_CONFIG, addOptionConfigApi);
}

export function* watchGetOptionConfig() {
  yield takeEvery(GET_OPTION_CONFIG, getOptionConfigApi);
}

export function* watchUpdateOptionConfig() {
  yield takeEvery(UPDATE_OPTION_CONFIG, updateOptionConfigApi);
}

export function* watchDeleteOptionConfig() {
  yield takeEvery(DELETE_OPTION, deleteOptionConfigApi);
}

function* corporateSaga() {
  yield all([
    fork(watchGetOptionConfig), 
    fork(watchAddOptionConfig), 
    fork(watchUpdateOptionConfig), 
    fork(watchDeleteOptionConfig)
  ]);
}
export default corporateSaga;
