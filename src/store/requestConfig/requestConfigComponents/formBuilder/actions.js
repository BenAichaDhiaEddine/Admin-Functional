import {
  GET_STEP,
  GET_STEP_SUCCESS,
  UPDATE_STEP,
  UPDATE_STEP_SUCCESS,
  CREATE_OR_GET_STEP,
  CREATE_OR_GET_STEP_SUCCESS,
  DELETE_STEP,
  DELETE_STEP_SUCCESS,
  GET_ALL_STEPS,
  GET_ALL_STEPS_SUCCESS,
} from "./actionTypes";

export const createOrGetStep = (id) => {
  return {
    type: CREATE_OR_GET_STEP,
    payload : id
  };
};

export const createOrGetStepSuccess = (response) => {
  return {
    type: CREATE_OR_GET_STEP_SUCCESS,
    payload: response,
  };
};

export const updateStep = (id) => {
  return {
    type: UPDATE_STEP,
    payload : id
  };
};

export const updateStepSuccess = (response) => {
  return {
    type: UPDATE_STEP_SUCCESS,
    payload: response,
  };
};

export const deleteStep = (id) => {
  return {
    type: DELETE_STEP,
    payload: id
  };
};

export const deleteStepsuccess = () => {
  return {
    type: DELETE_STEP_SUCCESS,
  };
};