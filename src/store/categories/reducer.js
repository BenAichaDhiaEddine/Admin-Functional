import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS } from "./actionTypes";

const categoriesInitState = {
  loading: false,
  categoriesList: [],
};

const CategoriesReducer = (state = categoriesInitState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_ALL_CATEGORIES:
      return { ...state, loading: true };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categoriesList: payload };

    default:
      return state;
  }
};


export default CategoriesReducer ; 