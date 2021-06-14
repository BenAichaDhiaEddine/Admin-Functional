import StateManager from "react-select";
import {
  FORMS_LIST_LOADING,
  FORMS_LIST_SUCCESS,
  FORMS_API_ERROR,
  RETRIEVE_FORM,
  RETRIEVE_FORM_SUCCESS,
  FORMS_RESET,
  ADD_NEW_FORM_ADMIN,
  ADD_FORM_INFORMATION,
  ADD_FORM_INFORMATION_SUCCESS,
  ADD_FORM_DATA,
  ADD_FORM_DATA_SUCCESS,
  NEXT_STEP,
  ADD_NEW_FORM_ADMIN_SUCCESS,
  ENABLE_EDIT_MODE,
  DISABLE_EDIT_MODE,
  
  EDIT_FORM_INFORMATION_SUCCESS,
  EDIT_FORM_INFORMATION,
  EDIT_FORM_DATA,
  EDIT_FORM_DATA_SUCCESS,
  TOGGLE_FORM,
  TOGGLE_FORM_SUCCESS,
} from "./types";

export const getList = () => {
  return {
    type: FORMS_LIST_LOADING,
  };
};

export const listSuccess = (data) => {
  return {
    type: FORMS_LIST_SUCCESS,
    payload: data,
  };
};

export const retrieveSuccess = (data) => {
  return {
    type: RETRIEVE_FORM_SUCCESS,
    payload: data,
  };
};

export const apiError = (error) => {
  return {
    type: FORMS_API_ERROR,
    payload: error,
  };
};

export const retrieve = (id) => {
  return {
    type: RETRIEVE_FORM,
    payload: id,
  };
};
export const enableEdit = (id) => {

  return {
    type: ENABLE_EDIT_MODE,
    payload: id,
  };
};
export const disableEdit = () => {
  return {
    type: DISABLE_EDIT_MODE,
  };
};
export const resetForms = () => {
  return {
    type: FORMS_RESET,
  };
};
export const addFormInformation = (info) => {
  return {
    type: ADD_FORM_INFORMATION,
    payload: info,
    
  };
};
export const addFormInformationSuccess = (info) => {
  return {
    type: ADD_FORM_INFORMATION_SUCCESS,
    payload: info,
  };
};

export const EditFormInformation = (information, id) => {
  return {
    type: EDIT_FORM_INFORMATION,
    payload: {
      id: id,
      submitData: information,
    },
  };
};
export const EditFormInformationSuccess = (payload) => {
  return {
   
    type: EDIT_FORM_INFORMATION_SUCCESS,
    payload: payload,
  };
};


export const addFormAdmin = (adminInfo) => {
  return {
    type: ADD_NEW_FORM_ADMIN,
    payload: adminInfo,
  };
};
export const addFormAdminSuccess = (adminInfo) => {
  return {
    type: ADD_NEW_FORM_ADMIN_SUCCESS,
    payload: adminInfo,
  };
};

export const addFormData = (data) => {
  return {
    type: ADD_FORM_DATA,
    payload: data,
  };
};
export const addFormDataSuccess = (data) => {
  return {
    type: ADD_FORM_DATA_SUCCESS,
    payload: data,
  };
};
export const editFormData = (data) => {
  return {
    type: EDIT_FORM_DATA,
    payload: data,
  };
};
export const editFormDataSuccess = (data) => {
  return {
    type: EDIT_FORM_DATA_SUCCESS,
    payload: data,
  };
};
export const toggleForm = (payload) => {
  return {
    type: TOGGLE_FORM,
    payload: payload,
  };
};
export const toggleFormSuccess = (payload) => {
  return {
    type: TOGGLE_FORM_SUCCESS,
    payload: payload,
  };
};
export const goToNextStep = () => {
  return {
    type: NEXT_STEP,
  };
};




