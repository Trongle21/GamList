import {
  FILTER_GAMES_BY_SEARCH,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
  SEARCH_GAMES,
  INCREASE_PAGE,
  SELECT_GAMES,
  FILTER_GAMES_BY_SELECT,
} from "./contains";

const initState = {
  games: [],
  page: 1,
  loading: true,
  error: null,
  select: "date",
  inputSearch: "",
  listGames: [],
};
const reducer = (state, action) => {
  let filterGames;
  let increase;
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        games: [...state.games, ...action.payload],
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INCREASE_PAGE:
      increase = state.page + 1;
      return {
        ...state,
        page: increase,
      };

    case SEARCH_GAMES:
      return {
        ...state,
        inputSearch: action.payload,
      };

    case FILTER_GAMES_BY_SEARCH:
      if (state.inputSearch && state.games.length > 0) {
        filterGames = state.games.filter((game) =>
          game.name.toLowerCase().includes(state.inputSearch.toLowerCase())
        );
      } else {
        filterGames = state.games;
      }
      return {
        ...state,
        games: filterGames,
      };

    case SELECT_GAMES:
      return {
        ...state,
        select: action.payload,
      };

    case FILTER_GAMES_BY_SELECT:
      if (state.select === "Date") {
        filterGames = state.games
          .slice()
          .sort((a, b) => new Date(b.updated) - new Date(a.updated));
      } else if (state.select === "Name") {
        filterGames = state.games
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.select === "Score") {
        filterGames = state.games
          .slice()
          .sort((a, b) => b.metacritic - a.metacritic);
      } else {
        filterGames = state.games;
      }
      return {
        ...state,
        games: filterGames,
      };

    default:
      throw new Error("Invalid action");
  }
};

export { initState };
export default reducer;
