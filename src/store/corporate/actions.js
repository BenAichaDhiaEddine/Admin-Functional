import {
  GET_CORPORATE_CONFIG,
  GET_CORPORATE_CONFIG_SUCCESS,
  UPDATE_CORPORATE_CONFIG,
  UPDATE_CORPORATE_CONFIG_SUCCESS,
} from "./actionTypes";

export const getConfig = () => {
  return {
    type: GET_CORPORATE_CONFIG,
  };
};

export const getConfigSuccess = (payload) => {
  return {
    type: GET_CORPORATE_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const updateConfig = (payload) => {
  return {
    type: UPDATE_CORPORATE_CONFIG,
    payload:  payload,
  };
};

export const updateConfigSuccess = (payload) => {
  return {
    type: UPDATE_CORPORATE_CONFIG_SUCCESS,
    payload: payload,
  };
};
