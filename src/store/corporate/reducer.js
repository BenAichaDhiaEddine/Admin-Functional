import {
  GET_CORPORATE_CONFIG,
  GET_CORPORATE_CONFIG_SUCCESS,
  UPDATE_CORPORATE_CONFIG,
  UPDATE_CORPORATE_CONFIG_SUCCESS,
} from "./actionTypes";

const initCorporateState = {
  loading: false,
  config: {
    name: {
      ar: "",
      fr: "",
    },
    city: {
      ar: "",
      fr: "",
    },
    phone: "",
    fax: "",
    email: "",
    website: "",
    features: [],
    customId: "",
    activated: true,
    _id: "",
    codePostal: "",
    __v: 0,
    deleted: false,
    state: "",
    number: "",
  },
};

const CorporateReducer = (state = initCorporateState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_CORPORATE_CONFIG:
      return { ...state, loading: true };

    case GET_CORPORATE_CONFIG_SUCCESS:
      return { ...state, config: payload, loading: false };
    case UPDATE_CORPORATE_CONFIG:
      return { ...state, loading: true };
    case UPDATE_CORPORATE_CONFIG_SUCCESS:
      return { ...state, loading: false, payload: payload };
    default:
      return state;
  }
};

export default CorporateReducer;
