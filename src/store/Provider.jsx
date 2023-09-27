import { useState, useEffect, useReducer } from "react";
import AppContext from "../context/AppContext";
import useAppContext from "../hooks/useAppContext";
import GameContext from "../context/GameContext";
import reducer, { initState } from "./reducer";
import { actions } from ".";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=c6135fd7a59a4865baff5f872e6f81d9"
        );
        const data = await res.json();
        if (!ignore) dispatch(actions.getDataSuccess(data));
      } catch (error) {
        if (!ignore) dispatch(actions.getDataFailed(error));
      }
    };
    getData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

const GameProvider = ({ children }) => {
  const [arrange, setArrange] = useState("Date");
  const [search, setSearch] = useState("");

  const handleArrange = (value) => {
    setArrange(value);
  };

  return (
    <GameContext.Provider
      value={{
        arrange,
        onArrange: handleArrange,
        search,
        setSearch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { AppProvider, GameProvider };
