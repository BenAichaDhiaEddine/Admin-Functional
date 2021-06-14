import {
    ADD_NEW_CREDIT,
    ADD_NEW_CREDIT_SUCCESS,
    GET_ALL_CREDIT,
    GET_ALL_CREDIT_SUCCESS,
    GET_CREDIT_BY_ID,
    GET_CREDIT_BY_ID_SUCCESS,
    UPDATE_CREDIT,
    UPDATE_CREDIT_SUCCESS,
    DELETE_CREDIT,
    DELETE_CREDIT_SUCCESS,
  } from "./actionTypes";
  
  export const addNewCredit = (payload) => {
    return {
      type: ADD_NEW_CREDIT,
      payload: payload,
    };
  };
  
  export const addNewCreditSuccess = (payload) => {
    return {
      type: ADD_NEW_CREDIT_SUCCESS,
      payload: payload,
    };
  };
  export const getCreditById = (payload) => {
    return {
      type: GET_CREDIT_BY_ID,
      payload: payload,
    };
  };
  
  export const getCreditByIdSuccess = (payload) => {
    return {
      type: GET_CREDIT_BY_ID_SUCCESS,
      payload: payload,
    };
  };
  export const getCredit = () => {
    return {
      type: GET_ALL_CREDIT,
    };
  };
  
  export const getCreditSuccess = (payload) => {
    return {
      type: GET_ALL_CREDIT_SUCCESS,
      payload: payload,
    };
  };
  
  export const updateCredit = (payload) => {
    return {
      type: UPDATE_CREDIT,
      payload: payload,
    };
  };
  export const updateCreditSuccess =(payload)=>{
  
    return {
      type:UPDATE_CREDIT_SUCCESS, 
      payload:payload
    }
  }


export const deleteCredit = (payload) => {
    return {
    type: DELETE_CREDIT,
    payload,
    };
};

export const deleteCreditSuccess = (index) => {
    return {
    type: DELETE_CREDIT_SUCCESS,
    index,
    };
};
