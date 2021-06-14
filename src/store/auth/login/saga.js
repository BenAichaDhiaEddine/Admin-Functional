import { takeEvery, fork, put, all, call } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { loginSuccess, logoutUserSuccess, apiError } from "./actions";

//Include Both Helper File with needed methods

import { post } from "../../../helpers/apiMethods";
function* loginUser({ payload: { user, history } }) {
  try {
    console.log("History", history);
    const response = yield call(post, "/functionalAdmin/auth/login", user);
    console.log(response);
    localStorage.setItem("token", response.data.token.accessToken);
    history.replace("/dashboard");
    yield put(loginSuccess(response));
  
  } catch (error) {
    console.log(error.message);
    yield put(apiError(error.message));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    sessionStorage.removeItem("authUser");

    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

function* authSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
