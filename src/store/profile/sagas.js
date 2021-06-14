import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import { get, update } from "../../helpers/apiMethods";
import { getProfileSuccess, EditProfileSuccess } from "./actions";
import { GET_PROFILE_DETAILES, EDIT_PROFILE } from "./actionTypes";
import { toast } from 'react-toastify';

const url = "/users/profile";
const updateUrl = "/functionalAdmin/auth/updateMe";

function* getProfileApi() {
  try {
    let result = yield call(get, url);
    yield put(getProfileSuccess(result));

  } catch (error) { }
}

export function* watchGetProfile() {
  yield takeEvery(GET_PROFILE_DETAILES, getProfileApi);
}

function* editProfileApi({ payload }) {
  try {
    const response = yield call(
      update,
      updateUrl,
      payload.dataToSubmit
    );
    yield put(EditProfileSuccess(response));
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
export function* EditProfile() {
  yield takeEvery(EDIT_PROFILE, editProfileApi);
}

function* profileSaga() {
  yield all([fork(watchGetProfile), fork(EditProfile)]);
}

export default profileSaga;
