import { useContext } from "react";
import AppContext from "../context/AppContext";

const useAppContext = () => {
  const [state, dispatch, { ...context }] = useContext(AppContext);

  return [state, dispatch, { ...context }];
};

export default useAppContext;
