// import { ConditionsReducer } from "..";
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

const initCorporateState = {
  loading: false,
  condition: [{
    customId: 0,
    title: "",
    items: [],
    corporate: null
  }]
};

const ConditionsReducer = (state = initCorporateState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_CONDITION_CONFIG:
      return { ...state, loading: true };
    case GET_CONDITION_CONFIG_SUCCESS:
      return { ...state, conditions: payload, loading: false };
    case ADD_CONDITION_CONFIG:
      return { ...state, loading: true };
    case ADD_CONDITION_CONFIG_SUCCESS:
      return { ...state, loading: false, conditions: payload };
    case UPDATE_CONDITION_CONFIG:
      return { ...state, loading: true };
    case UPDATE_CONDITION_CONFIG_SUCCESS:
      return { ...state, loading: false, conditions: payload };
      case DELETE_CONDITION:
      return { ...state, loading: true };
      case DELETE_CONDITION_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default ConditionsReducer;
