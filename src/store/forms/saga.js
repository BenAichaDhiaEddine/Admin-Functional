import { takeEvery, fork, put, all, call, take } from "redux-saga/effects";
import { setLocalStorageRegistration } from "./util"
// Types
import {
  ADD_FORM_DATA,
  ADD_FORM_INFORMATION,
  ADD_NEW_FORM_ADMIN,
  EDIT_FORM_DATA,
  EDIT_FORM_INFORMATION,
  FORMS_LIST_LOADING,
  RETRIEVE_FORM,
  SFTP_CONNECTION,
  TOGGLE_FORM,
} from "./types";

// Action
import {
  listSuccess,
  retrieveSuccess,
  apiError,
  addFormInformationSuccess,
  goToNextStep,
  addFormAdminSuccess,
  EditFormInformationSuccess,
  editFormDataSuccess,

  toggleFormSuccess,
} from "./actions";

// Helpers
import { get, post, patch, update } from "../../helpers/apiMethods";

// Swagger
const form_list = "formBuilder/form";
const corporate = "formBuilder/form/addform";
const add_corporate = "formBuilder/form/addform";
function* formsList() {
  try {
    const response = yield call(get, form_list);
    yield put(listSuccess(response.data));

  } catch (error) {
    yield put(apiError(error));
  }
}
function* formsRetrieve({ payload }) {
  try {
    const response = yield call(get, `${form_list}/${payload}`);
    yield put(retrieveSuccess(response));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* addFormInformationApi({ payload }) {
  try {
    const response = yield call(post, add_corporate, payload);

    yield put(addFormInformationSuccess(response));
    setLocalStorageRegistration(response);
    yield put(goToNextStep());

  } catch (error) {
    console.error(error);
  }
}

function* addFormDataApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(update, `${form_list}/${submitData.ADD_FORM_DATAid}`, {
      form: submitData,
    });
    yield put(addFormInformationSuccess(response));

    setLocalStorageRegistration(response);

  } catch (error) {
    console.error(error);
  }
}
function* editFormDataApi({ payload }) {
  let { id, submitData } = payload;

  console.log(submitData)
  try {
    const response = yield call(update, `${form_list}/${id}`,
      submitData,
    );
    console.log("Saga2")
    console.log(submitData)
    yield put(editFormDataSuccess(response));


  } catch (error) {
    console.error(error);
  }
}
function* addFormSftpApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(update, `${form_list}/${id}`, {
      sftpServerConfig: submitData,
    });
    // yield put(addSFTPConnectionSuccess(response));

  } catch (error) {
    console.error(error);
  }
}
function* editFormInformationApi({ payload }) {
  let { submitData, id } = payload;
  try {
    const response = yield call(
      update,
      `${form_list}/${id}`,
      submitData
    );
    yield put(EditFormInformationSuccess(response));
    yield put(goToNextStep());

  } catch (error) {
    console.error(error);
  }
}
function* addFormAdminApi({ payload }) {

  try {
    const response = yield call(post, `${corporate}`, payload);
    yield put(addFormAdminSuccess(response));
    setLocalStorageRegistration(response, payload);

  } catch (error) {
    console.error(error);
  }
}
function* toggleFormStatus({ payload }) {
  try {
    const response = yield call(update, `${form_list}/${payload.id}`, {
      activated: payload.activated,
    });
    yield put(toggleFormSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

export function* addNewFormAdmin() {
  yield takeEvery(ADD_NEW_FORM_ADMIN, addFormAdminApi);
}
export function* addData() {
  yield takeEvery(ADD_FORM_DATA, addFormDataApi);
}

export function* addForminfo() {
  yield takeEvery(ADD_FORM_INFORMATION, addFormInformationApi);
}

export function* watchFormsListLoading() {
  yield takeEvery(FORMS_LIST_LOADING, formsList);
}

export function* watchRetrieveForm() {
  yield takeEvery(RETRIEVE_FORM, formsRetrieve);
}
export function* toggleForm() {

  yield takeEvery(TOGGLE_FORM, toggleFormStatus);
}
export function* editFormInfo() {
  yield takeEvery(
    EDIT_FORM_INFORMATION,
    editFormInformationApi
  );
}
export function* editFormData() {
  yield takeEvery(EDIT_FORM_DATA, editFormDataApi);
}

export function* connectToSftp() {
  yield takeEvery(SFTP_CONNECTION, addFormSftpApi);
}

function* formsSaga() {
  yield all([
    fork(watchFormsListLoading),
    fork(watchRetrieveForm),
    fork(addForminfo),
    fork(addData),
    fork(editFormData),
    fork(addNewFormAdmin),
    
    fork(editFormInfo),
    fork(connectToSftp),
    fork(toggleForm)
  ]);
}

export default formsSaga;
