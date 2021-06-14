import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { get, update, post, remove } from "../../helpers/apiMethods";
import { addNewCorporateAdminSuccess, 
          getCorporateAdminSuccess ,
          getCorporateAdmins ,
          updateCorporateAdminSuccess,
          deleteCorporateAdminSuccess
} from "./action";
import { ADD_NEW_CORPORATE_ADMIN, GET_ALL_CORPORATE_ADMIN ,DELETE_CORPORATE_ADMIN ,UPDATE_CORPORATE_ADMIN} from "./actionTypes";
import { toast } from 'react-toastify';


const adminUrlGet = "/functionalAdmin/admins/listCorporateAdmins";
const adminUrlPost = "/functionalAdmin/admins/addAdminCorporate";
const baseUrl ="/functionalAdmin/admins";

function* addNewCorporateAdminApi({ payload }) {
  try {
    let result = yield call(post, `${adminUrlPost}`, payload);
    yield put(addNewCorporateAdminSuccess(result));
    yield put(getCorporateAdmins());
    toast.success('✔️ Admin Corporate a été ajouté avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error.message);
    toast.error("❌ Une erreur s'est produite, Admin Corporate n'a pas été ajouté!", {
      position: "top-right",
      autoClose: 2500
    });
  }
}

function* getAllCorporateAdminApi() {
  try {
    let result = yield call(get, `${adminUrlGet}`);
    yield put(getCorporateAdminSuccess(result.data));
  } catch (error) {
    console.error(error.message);
  }
}
function* deleteCorporateAdminApi(payload ) {
  let  {_id} = payload.payload;
  try {
    yield call(remove, `${baseUrl}/${_id}`);
    yield put(deleteCorporateAdminSuccess());
    yield put(getCorporateAdmins());
    toast.success('✔️ Admin Corporate a été supprimé avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error);
    toast.error("❌ Une erreur s'est produite, Admin Corporate n'a pas été supprimé !", {
      position: "top-right",
      autoClose: 2500
    });
  }
}
function* updateCorporateAdminApi({ payload }) {
  let  dataToSubmit  = payload;
  let id =payload.id ;
  try {
    const response = yield call(
      update,
      `${baseUrl}/${id}`,
      dataToSubmit
    );
    yield put(updateCorporateAdminSuccess(response));
    yield put(getCorporateAdmins());
    toast.success('✔️ Admin Corporate a été modifié avec succès!', {
      position: "top-right",
      autoClose: 2500
    });
  } catch (error) {
    console.error(error);
    toast.error("❌ erreur s'est produite, Admin Corporate n'a pas été modifié!", {
      position: "top-right",
      autoClose: 2500
    });
  }
}

export function* watchAddNewCorporateAdmin() {
  yield takeEvery(ADD_NEW_CORPORATE_ADMIN, addNewCorporateAdminApi);
}

export function* watchGetAllCorporateAdmin() {
  yield takeEvery(GET_ALL_CORPORATE_ADMIN, getAllCorporateAdminApi);
}
export function* deleteCorporateAdminSaga() {
  yield takeEvery(DELETE_CORPORATE_ADMIN, deleteCorporateAdminApi);
}
export function* updateCorporateAdmin() {
  yield takeEvery(UPDATE_CORPORATE_ADMIN,updateCorporateAdminApi);
}

function* CorporateAdminSaga() {
  yield all([
    fork(watchAddNewCorporateAdmin), 
    fork(deleteCorporateAdminSaga), 
    fork(updateCorporateAdmin),
    fork(watchGetAllCorporateAdmin)
  ]);
}

export default CorporateAdminSaga;
