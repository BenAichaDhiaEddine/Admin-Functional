import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import CorporateReducer from "./corporate/reducer";
import CreditReducer from "./credit/reducer";
import ProfileReducer from "./profile/reducer";
import FormReducer from "./forms/reducer";
// import TeamsReducer from "./team/reducers"
// import MembersReducer from "./members/reducers";
import CorporateAdminReducer from "./corporateAdmin/reducers";
import CategoriesReducer from "./categories/reducer";
//import OptionsReducer from "./requestConfig/requestConfigComponents/options/reducer";
import { ConditionsReducer, OptionsReducer, CollectionReducer , FormBuilderReducer } from "./requestConfig/requestConfigComponents";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Corporate: CorporateReducer,
  Profile: ProfileReducer,
  CorporateAdmin: CorporateAdminReducer,
  Categories: CategoriesReducer,
  Credit: CreditReducer,
  Conditions: ConditionsReducer,
  Options: OptionsReducer,
  Collections: CollectionReducer,
  FormBuilder :FormBuilderReducer,
  // Team: TeamsReducer,
  forms: FormReducer

});

export default rootReducer;
