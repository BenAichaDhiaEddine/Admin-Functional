import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, update, post, remove } from "../../helpers/apiMethods";
import { addNewCreditSuccess, getCreditSuccess, getCreditByIdSuccess, getCreditById ,getCredit } from "./action";
import { ADD_NEW_CREDIT, GET_ALL_CREDIT, GET_CREDIT_BY_ID} from "./actionTypes";
import { toast } from 'react-toastify';
const addUrlCredit = "/functionalAdmin/requestConfig/addRequestConfigInfo";
const getUrlCredit = "/functionalAdmin/requestConfig/getRequestConfigInfo";
const getCreditId = "/functionalAdmin/requestConfig";

function* addNewCreditApi({ payload }) {
  try {
  
    let result = yield call(post, addUrlCredit, payload);
    yield put(addNewCreditSuccess(result));
    yield put(getCredit());
    toast.success('✔️ Crédit a été ajouté avec succès!', {
      position: "top-right",
      autoClose: 2500
    });

  } catch (error) {
    console.error(error.message);
    toast.error("❌ Une erreur s'est produite, Crédit n'a pas été ajouté!", {
      position: "top-right",
      autoClose: 2500
    });
  } 
}
function* getAllCreditApi() { 
  try {
    let result = yield call(get, getUrlCredit);
    yield put(getCreditSuccess(result.data));
  } catch (error) {}
} 
function* getCreditByIdApi(payload) { 
  try {
    let id =payload.payload
    let response = yield call(get,`${getCreditId}/${id}`);
    yield put(getCreditByIdSuccess(response));
    
  } catch (error) {}
} 

export function* watchAddNewCredit() {

  yield takeEvery(ADD_NEW_CREDIT, addNewCreditApi);
}

export function* watchGetAllCredit() {
  yield takeEvery(GET_ALL_CREDIT, getAllCreditApi);
}
export function* watchGetCreditById() {
  yield takeEvery(GET_CREDIT_BY_ID, getCreditByIdApi);
}

function* CreditSaga() {
  yield all([
    fork(watchAddNewCredit), 
    fork(watchGetCreditById), 
    fork(watchGetAllCredit)
  ]);
}

export default CreditSaga;
