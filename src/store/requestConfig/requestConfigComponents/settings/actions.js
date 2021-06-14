import {
  GET_CONDITION_CONFIG,
  GET_CONDITION_CONFIG_SUCCESS,
  ADD_CONDITION_CONFIG,
  ADD_CONDITION_CONFIG_SUCCESS,
  UPDATE_CONDITION_CONFIG,
  UPDATE_CONDITION_CONFIG_SUCCESS,
  DELETE_CONDITION,
  DELETE_CONDITION_SUCCESS
} from "./actionTypes";

export const getConditionConfig = (id) => {
  return {
    type: GET_CONDITION_CONFIG,
  };
};

export const getConditionConfigSuccess = (payload) => {
  return {
    type: GET_CONDITION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const addConditionConfig = (payload, oldCondition) => {
  return {
    type: ADD_CONDITION_CONFIG,
    payload: { payload, oldCondition },
  };
};

export const addConditionConfigSuccess = (payload) => {
  return {
    type: ADD_CONDITION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const updateConditionConfig = (payload, id, oldCondition) => {
  return {
    type: UPDATE_CONDITION_CONFIG,
    payload: { payload, id, oldCondition },
  };
};

export const updateConditionConfigSuccess = (payload) => {
  return {
    type: UPDATE_CONDITION_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const deleteCondition = (payload) => {
  return {
    type: DELETE_CONDITION,
    payload: payload,
  };
};

export const deleteConditionSuccess = (payload) => {
  return {
    type: DELETE_CONDITION_SUCCESS,
    payload: payload,
  };
};