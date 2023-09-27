import { GET_DATA_FAILED, GET_DATA_SUCCESS } from "./contains";

const initState = {
  games: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        games: action.payload,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
};

export { initState };
export default reducer;
