import { GET_PROFILE_DETAILES, GET_PROFILE_DETAILES_SUCCESS, EDIT_PROFILE, EDIT_PROFILE_SUCCESS } from "./actionTypes";

const ProfileInitState = {
  loading: false,
  profileDetailes: {
    firstName: {
      ar: "",
      fr: "",
    },
    lastName: {
      ar: "",
      fr: "",
    }


  }







};

const ProfileReducer = (state = ProfileInitState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_PROFILE_DETAILES:
      return { ...state, loading: true };
    case GET_PROFILE_DETAILES_SUCCESS:
      return { ...state, loading: false, profileDetailes: payload };
    case EDIT_PROFILE:
      return { ...state, loadingUpdate: true };
    case EDIT_PROFILE_SUCCESS:

      return { ...state, loadingUpdate: false, profileDetailes: payload };

    default:
      return state;

  }
};


export default ProfileReducer;