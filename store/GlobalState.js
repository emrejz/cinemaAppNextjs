import { createContext, useReducer } from "react";
import { movieReducer } from "./movieReducer";
export const MovieContext = createContext();

export const GlobalState = ({ children }) => {
  const getMovies = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await fetch(`http://localhost:3001/results`, {
        method: "GET"
      });
      if (data.ok) {
        let lastData = await data.json();
        dispatch({ type: "GET_MOVIES", payload: lastData });
      } else {
        dispatch({ type: "ERROR", payload: data.statusText });
      }
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message ? error.message : "Service error!"
      });
    }
  };
  const initState = {
    loading: false,
    error: null,
    list: [],
    getMovies
  };
  const [state, dispatch] = useReducer(movieReducer, initState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
