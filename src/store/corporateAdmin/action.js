import {
  ADD_NEW_CORPORATE_ADMIN,
  ADD_NEW_CORPORATE_ADMIN_SUCCESS,
  GET_ALL_CORPORATE_ADMIN,
  GET_ALL_CORPORATE_ADMIN_SUCCESS,
  UPDATE_CORPORATE_ADMIN,
  UPDATE_CORPORATE_ADMIN_SUCCESS,
  DELETE_CORPORATE_ADMIN,
  DELETE_CORPORATE_ADMIN_SUCCESS,
} from "./actionTypes";

export const addNewCorporateAdmin = (payload) => {
  return {
    type: ADD_NEW_CORPORATE_ADMIN,
    payload: payload,
  };
};

export const addNewCorporateAdminSuccess = (payload) => {
  return {
    type: ADD_NEW_CORPORATE_ADMIN_SUCCESS,
    payload: payload,
  };
};

export const getCorporateAdmins = () => {
  return {
    type: GET_ALL_CORPORATE_ADMIN,
  };
};

export const getCorporateAdminSuccess = (payload) => {
  return {
    type: GET_ALL_CORPORATE_ADMIN_SUCCESS,
    payload: payload,
  };
};

export const updateCorporateAdmin = (payload) => {
  return {
    type: UPDATE_CORPORATE_ADMIN,
    payload: payload,
  };
};
export const updateCorporateAdminSuccess =(payload)=>{

  return {
    type:UPDATE_CORPORATE_ADMIN_SUCCESS, 
    payload:payload
  }
}
export const deleteCorporateAdmin = (payload) => {
  return {
    type:   DELETE_CORPORATE_ADMIN,
    payload: payload,
  };
};
export const deleteCorporateAdminSuccess =(payload)=>{

  return {
    type:DELETE_CORPORATE_ADMIN_SUCCESS, 
    payload:payload
  }
}