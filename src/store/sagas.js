import { all } from "redux-saga/effects";

//public
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import LayoutSaga from "./layout/saga";
import corporateSaga from "./corporate/sagas";
import formSaga from "./forms/saga";
import corporateAdminSaga from "./corporateAdmin/sagas";
import profileSaga from "./profile/sagas";
import categoriesSaga from "./categories/sagas";
// import TeamsSaga from "./team/sagas"
import settingsSaga from "./requestConfig/requestConfigComponents/settings/sagas";
import optionsSaga from "./requestConfig/requestConfigComponents/options/sagas";
import collectionsSaga from "./requestConfig/requestConfigComponents/collections/sagas";
import formBuilderSaga from "./requestConfig/requestConfigComponents/formBuilder/sagas";
import CreditSaga from "./credit/saga";




export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    AuthSaga(),
    ForgetSaga(),
    LayoutSaga(),
    corporateSaga(),
    formSaga(),
    corporateAdminSaga(),
    profileSaga(),
    categoriesSaga(),
    settingsSaga(),
    optionsSaga(),
    collectionsSaga(),
    formBuilderSaga(),
    // TeamsSaga(),
    CreditSaga()
  ]);
}
