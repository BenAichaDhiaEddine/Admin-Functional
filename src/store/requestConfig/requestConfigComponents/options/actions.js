import {
  GET_OPTION_CONFIG,
  GET_OPTION_CONFIG_SUCCESS,
  ADD_OPTION_CONFIG,
  ADD_OPTION_CONFIG_SUCCESS,
  UPDATE_OPTION_CONFIG,
  UPDATE_OPTION_CONFIG_SUCCESS,
  DELETE_OPTION,
  DELETE_OPTION_SUCCESS
} from "./actionTypes";

export const getOptionConfig = (id) => {
  return {
    type: GET_OPTION_CONFIG,
  };
};

export const getOptionConfigSuccess = (payload) => {
  return {
    type: GET_OPTION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const addOptionConfig = (payload, oldOption) => {
  return {
    type: ADD_OPTION_CONFIG,
    payload: { payload, oldOption },
  };
};

export const addOptionConfigSuccess = (payload) => {
  return {
    type: ADD_OPTION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const updateOptionConfig = (payload, id, oldOption) => {
  return {
    type: UPDATE_OPTION_CONFIG,
    payload: { payload, id, oldOption },
  };
};

export const updateOptionConfigSuccess = (payload) => {
  return {
    type: UPDATE_OPTION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const deleteOption = (payload) => {
  return {
    type: DELETE_OPTION,
    payload: payload,
  };
};

export const deleteOptionSuccess = (payload) => {
  return {
    type: DELETE_OPTION_SUCCESS,
    payload: payload,
  };
};