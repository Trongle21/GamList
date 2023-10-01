import { useState, useEffect, useReducer } from "react";
import AppContext from "../context/AppContext";
import reducer, { initState } from "./reducer";
import { actions } from ".";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const { page, games } = state;

  const fetchData = async () => {
    let ignore = false;
    try {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=c6135fd7a59a4865baff5f872e6f81d9&page=${page}`
      );
      const data = await res.json();
      const dataGames = data.results;

      if (!ignore) {
        dispatch(actions.getDataSuccess(dataGames));
        dispatch(actions.increasePage());
      } else {
        dispatch(actions.getDataFailed("Invalid data received from API"));
      }
    } catch (error) {
      if (!ignore) dispatch(actions.getDataFailed(error));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchGames = (data) => {
    dispatch(actions.filterGamesBySearch(data));
  };
  const filterGameById = (id) => {
    console.log(id);
    return games && games.find((game) => game.id === +id);
  };
  filterGameById();


  return (
    <AppContext.Provider
      value={[
        state,
        dispatch,
        {
          fetchData,
          handleSearchGames,
          filterGameById,
        },
      ]}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
