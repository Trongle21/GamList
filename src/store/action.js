import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  SEARCH_GAMES,
  FILTER_GAMES_BY_SEARCH,
  INCREASE_PAGE,
  SELECT_GAMES,
  FILTER_GAMES_BY_SELECT,
} from "./contains";

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailed = (payload) => {
  return {
    type: GET_DATA_FAILED,
    payload,
  };
};

const increasePage = (payload) => {
  return {
    type: INCREASE_PAGE,
    payload,
  };
};

const searchGames = (payload) => {
  return {
    type: SEARCH_GAMES,
    payload,
  };
};

const filterGamesBySearch = (payload) => {
  return {
    type: FILTER_GAMES_BY_SEARCH,
    payload,
  };
};

const selectGames = (payload) => {
  return {
    type: SELECT_GAMES,
    payload,
  };
};

const filterGameBySelect = (payload) => {
  return {
    type: FILTER_GAMES_BY_SELECT,
    payload,
  };
};

export {
  getDataSuccess,
  getDataFailed,
  increasePage,
  searchGames,
  filterGamesBySearch,
  selectGames,
  filterGameBySelect,
};
