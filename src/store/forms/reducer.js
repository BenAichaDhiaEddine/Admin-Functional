
import {
  FORMS_LIST_LOADING,
  FORMS_LIST_SUCCESS,
  FORMS_API_ERROR,
  RETRIEVE_FORM,
  RETRIEVE_FORM_SUCCESS,
  FORMS_RESET,
  ADD_NEW_FORM_ADMIN,
  ADD_FORM_INFORMATION,
  ADD_NEW_FORM_ADMIN_SUCCESS,
  ADD_FORM_INFORMATION_SUCCESS,
  ADD_FORM_DATA,
  ADD_FORM_DATA_SUCCESS,
  EDIT_FORM_DATA,
  EDIT_FORM_DATA_SUCCESS,
  SFTP_CONNECTION,
  SFTP_CONNECTION_SUCCESS,
  ENABLE_EDIT_MODE,
  DISABLE_EDIT_MODE,
  NEXT_STEP,
  TOGGLE_FORM,
  TOGGLE_FORM_SUCCESS
} from "./types";
const initialState = {
  list: [],
  
  form:{sections:[],name:"",description:""}
 
};
const forms = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FORMS_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FORMS_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };

    case FORMS_API_ERROR:
      return { ...state, error: payload, loading: false };

    case RETRIEVE_FORM:
      return {
        ...state,
        loading: true,
      };
    case NEXT_STEP:
      return { ...state, stepNumber: state.stepNumber + 1 };

    case RETRIEVE_FORM_SUCCESS:
      return {
        ...state,
        form: payload,
        loading: false,
      };

    case FORMS_RESET:
      return {
        ...initialState,
      };

    case ADD_NEW_FORM_ADMIN:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_FORM_ADMIN_SUCCESS:
      return {
        ...state,
        form: payload,
        loading: false,
      };
    case ADD_FORM_INFORMATION:
      return {
        ...state,
        loading: true,
         
      };
    case ADD_FORM_INFORMATION_SUCCESS:

      return {
        ...state,
        loading: false,
        form: payload,
       
      };
    case ADD_FORM_DATA:
      return {
        ...state,
        loading: true,
      };
    case ADD_FORM_DATA_SUCCESS:
      return {
        ...state,
        form: payload,
        loading: false,
      };
    case EDIT_FORM_DATA:
      return {
        ...state,
        loading: true,
      };

    case EDIT_FORM_DATA_SUCCESS:
      return {
        ...state,
        form: payload,
        loading: false,
      };
    case SFTP_CONNECTION:
      return {
        ...state,
        loading: true,
        form: payload,
      };
    case SFTP_CONNECTION_SUCCESS:
      return {
        ...state,
        form: payload,
      };
    case ENABLE_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        editId: payload,
        stepNumber: 0,
      };
    case DISABLE_EDIT_MODE:
      return {
        ...state,
        editMode: false,
        editId: null,
        stepNumber: 0,
      };
    case TOGGLE_FORM:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_FORM_SUCCESS:
      let { list } = state;

      let newList = list.map((elm) => {
        if (elm.id === payload.id) {
          elm.activated = payload.activated;
        }
        return elm;
      });
      return {
        ...state,
        loading: false,
        editList: newList,
        baseList: newList,
      };
    default:
      return state;
  }
};
//changes
export default forms;
