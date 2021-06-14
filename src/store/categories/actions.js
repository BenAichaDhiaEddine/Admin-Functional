import { get } from "../../helpers/apiMethods";
import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS } from "./actionTypes";

export const getCategories = () => {
  return {
    type: GET_ALL_CATEGORIES,
  };
};

export const getCategoriesSuccess = (payload) => {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    payload: payload,
  };
};
