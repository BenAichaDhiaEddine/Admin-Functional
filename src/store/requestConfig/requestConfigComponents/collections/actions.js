import {
  GET_COLLECTIONS_CONFIG,
  GET_COLLECTIONS_CONFIG_SUCCESS,
  ADD_COLLECTIONS_CONFIG,
  ADD_COLLECTIONS_CONFIG_SUCCESS,
  UPDATE_COLLECTIONS_CONFIG,
  UPDATE_COLLECTIONS_CONFIG_SUCCESS,
  GET_ITEMS_CONFIG,
  GET_ITEMS_CONFIG_SUCCESS,
  ADD_ITEMS_CONFIG,
  ADD_ITEMS_CONFIG_SUCCESS

} from "./actionTypes";

export const getCollectionsConfig = () => {
  return {
    type: GET_COLLECTIONS_CONFIG,
  };
};

export const getCollectionsConfigSuccess = (payload) => {
  return {
    type: GET_COLLECTIONS_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const addCollectionsConfig = (payload, oldCollections) => {
  return {
    type: ADD_COLLECTIONS_CONFIG,
    payload: { payload, oldCollections },
  };
};

export const addCollectionsConfigSuccess = (payload) => {
  return {
    type: ADD_COLLECTIONS_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const updateCollectionsConfig = (payload, id, oldCollections) => {
  return {
    type: UPDATE_COLLECTIONS_CONFIG,
    payload: { payload, id, oldCollections },
  };
};

export const updateCollectionsConfigSuccess = (payload) => {
  return {
    type: UPDATE_COLLECTIONS_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const getItemsConfig = (id) => {
  return {
    type: GET_ITEMS_CONFIG,
  };
};

export const getItemsConfigSuccess = (payload) => {
  return {
    type: GET_ITEMS_CONFIG_SUCCESS,
    payload: payload,
  };
};

export const addItemsConfig = (payload, oldCollections, id) => {
  return {
    type: ADD_ITEMS_CONFIG,
    payload: { payload, oldCollections, id },
  };
};

export const addItemsConfigSuccess = (payload) => {
  return {
    type: ADD_ITEMS_CONFIG_SUCCESS,
    payload: payload,
  };
};