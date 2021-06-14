//import { OptionsReducer } from "..";
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

const initCorporateState = {
  loading: false,
  options: [{
    customId: 0,
    title: "",
    items: [],
    corporate: null
  }]
};

const OptionsReducer = (state = initCorporateState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_OPTION_CONFIG:
      return { ...state, loading: true };
    case GET_OPTION_CONFIG_SUCCESS:
      return { ...state, options: payload, loading: false };
    case ADD_OPTION_CONFIG:
      return { ...state, loading: true };
    case ADD_OPTION_CONFIG_SUCCESS:
      return { ...state, loading: false, options: payload };
    case UPDATE_OPTION_CONFIG:
      return { ...state, loading: true };
    case UPDATE_OPTION_CONFIG_SUCCESS:
      return { ...state, loading: false, options: payload };
      case DELETE_OPTION:
      return { ...state, loading: true };
      case DELETE_OPTION_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default OptionsReducer;
