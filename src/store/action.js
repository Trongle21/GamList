import { GET_DATA_SUCCESS } from "./contains";

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailed = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

export { getDataSuccess, getDataFailed };
