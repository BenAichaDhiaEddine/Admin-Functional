import {
    ADD_NEW_CREDIT,
    ADD_NEW_CREDIT_SUCCESS,
    GET_ALL_CREDIT,
    GET_ALL_CREDIT_SUCCESS,
    UPDATE_CREDIT,
    UPDATE_CREDIT_SUCCESS,
    DELETE_CREDIT,
    DELETE_CREDIT_SUCCESS,
    GET_CREDIT_BY_ID,
    GET_CREDIT_BY_ID_SUCCESS,
  } from "./actionTypes";
  
  const creditsInitState = {
    loading: false,
    creditsList: [],
    credit: {
      name: "",
      description: "",
      condition: [{name:"",description:""}],
      options: [{
        name:"",
        description:""
      }],
    }
  };
  
  const CreditReducer = (state = creditsInitState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case GET_ALL_CREDIT:
        return { ...state, loading: true };
      case GET_ALL_CREDIT_SUCCESS:
        return { ...state, loading: false, creditsList: payload };

      case ADD_NEW_CREDIT:
        return { ...state, loading: true };
      case ADD_NEW_CREDIT_SUCCESS:
        return { ...state, loading: false, credit: payload };

        case UPDATE_CREDIT:
          return { ...state, loading: true };
      case UPDATE_CREDIT_SUCCESS:
          return { ...state, loading: false, creditsList: payload };

      case DELETE_CREDIT:
          return { ...state, loading: true };
      case DELETE_CREDIT_SUCCESS:
          return { ...state, loading: false , creditsList: payload}; 
      case GET_CREDIT_BY_ID:
          return { ...state, loading: true };
      
      case GET_CREDIT_BY_ID_SUCCESS:
          return { ...state, credit: payload, loading: false };

      default:
        return state;
    }
  };
  
  export default CreditReducer ; 
  