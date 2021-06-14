import {
  ADD_NEW_CORPORATE_ADMIN,
  ADD_NEW_CORPORATE_ADMIN_SUCCESS,
  GET_ALL_CORPORATE_ADMIN,
  GET_ALL_CORPORATE_ADMIN_SUCCESS,
  UPDATE_CORPORATE_ADMIN,
  UPDATE_CORPORATE_ADMIN_SUCCESS,
  DELETE_CORPORATE_ADMIN,
  DELETE_CORPORATE_ADMIN_SUCCESS,
} from "./actionTypes";

const corporateAdminInitState = {
  loading: false,
  corporateAdminList: [],
  editMode: false,
  editId: null,
  member:{
    member: {
      firstName: {
        "fr": "",
        "ar":""
      },
      lastName: {
        "fr": "",
        "ar":""
      },
      phone: "",
      activated: true,
      address: [
      ],
      type: "",
      //deleted: false,
      _id: "",
      password: "",
      email: "",
      slug: "",
      createdAt: "",
      updatedAt: "",
      __v: 1
    },
  
  }
};

const CorporateAdminReducer = (state = corporateAdminInitState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_ALL_CORPORATE_ADMIN:
      return { ...state, loading: true };
    case GET_ALL_CORPORATE_ADMIN_SUCCESS:
      return { ...state, loading: false, corporateAdminList: payload };
    case ADD_NEW_CORPORATE_ADMIN:
      return { ...state, loading: true };
    case ADD_NEW_CORPORATE_ADMIN_SUCCESS:
      return { ...state, loading: false, corporateAdminList: [...state.corporateAdminList, action.payload] };
    case DELETE_CORPORATE_ADMIN:
      return { ...state, loading: true };
    case DELETE_CORPORATE_ADMIN_SUCCESS:
      return { ...state, loading: false, corporateAdminList: [...state.corporateAdminList, action.payload] };
    case UPDATE_CORPORATE_ADMIN:
      return {...state,loading: true,};
    case UPDATE_CORPORATE_ADMIN_SUCCESS:
      return {...state,loading: false,};
    default:
      return state;
  }
};

export default CorporateAdminReducer ; 

