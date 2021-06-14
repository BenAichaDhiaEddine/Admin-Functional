import {
  GET_COLLECTIONS_CONFIG,
  GET_COLLECTIONS_CONFIG_SUCCESS,
  ADD_COLLECTIONS_CONFIG,
  ADD_COLLECTIONS_CONFIG_SUCCESS,
  UPDATE_COLLECTIONS_CONFIG,
  UPDATE_COLLECTIONS_CONFIG_SUCCESS
} from "./actionTypes";

const initCorporateState = {
  loading: false,
  collections: [{
    customId: 0,
    name: "",
    collectionItems: [],
    corporate: null
  }]
};

const SettingsReducer = (state = initCorporateState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_COLLECTIONS_CONFIG:
      return { ...state, loading: true };
    case GET_COLLECTIONS_CONFIG_SUCCESS:
      return { ...state, collections: payload, loading: false };
    case ADD_COLLECTIONS_CONFIG:
      return { ...state, loading: true };
    case ADD_COLLECTIONS_CONFIG_SUCCESS:
      return { ...state, loading: false, collections: payload };
    case UPDATE_COLLECTIONS_CONFIG:
      return { ...state, loading: true };
    case UPDATE_COLLECTIONS_CONFIG_SUCCESS:
      return { ...state, loading: false, collections: payload };
    default:
      return state;
  }
};

export default SettingsReducer;
