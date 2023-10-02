import { useState, useEffect, useReducer } from "react";
import AppContext from "../context/AppContext";
import reducer, { initState } from "./reducer";
import { actions } from ".";

const AppProvider = ({ children }) => {
  const [selectGenres, setSelectGenres] = useState("Action");
  const [state, dispatch] = useReducer(reducer, initState);
  const { page, games, inputSearch } = state;

  const fetchData = async () => {
    let ignore = false;
    try {
      // const res = await fetch(
      //   `https://api.rawg.io/api/games?search=${encodeURIComponent(
      //     searchTerm
      //   )}&key=c6135fd7a59a4865baff5f872e6f81d9&page=${page}`
      // );
      const res = await fetch(
        `https://api.rawg.io/api/games?key=c6135fd7a59a4865baff5f872e6f81d9&page=${page}`
      );
      const data = await res.json();
      const dataGames = data.results;

      if (!ignore) {
        dispatch(actions.getDataSuccess(dataGames));
      }
    } catch (error) {
      if (!ignore) dispatch(actions.getDataFailed(error));
    }

    return () => {
      ignore = true;
    };
  };

  console.log(games && games.length);

  useEffect(() => {
    fetchData();
  }, [inputSearch]);

  const filterGameById = (id) => {
    return games && games.find((game) => game.id === +id);
  };
  filterGameById();

  const handleSelectGenres = (name) => {
    setSelectGenres(name);
    console.log(selectGenres);
  };

  return (
    <AppContext.Provider
      value={[
        state,
        dispatch,
        {
          fetchData,
          // handleSearchGames,
          filterGameById,
          selectGenres,
          onSelectGenres: handleSelectGenres,
        },
      ]}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
