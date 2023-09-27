import { useContext } from "react";
import GameContext from "../context/GameContext";

const useGameContext = () => {
  const context = useContext(GameContext);

  return { ...context };
};

export default useGameContext;
