import { GET_PROFILE_DETAILES, GET_PROFILE_DETAILES_SUCCESS, EDIT_PROFILE, EDIT_PROFILE_SUCCESS } from "./actionTypes";

export const getProfile = () => {
  return {
    type: GET_PROFILE_DETAILES,
  };
};

export const getProfileSuccess = (payload) => {
  return {
    type: GET_PROFILE_DETAILES_SUCCESS,
    payload: payload,
  };
};

export const EditProfile = (profileData) => {
  return {
    type: EDIT_PROFILE,
    payload: profileData,
  };
};

export const EditProfileSuccess = (data) => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: data,
  };
};

