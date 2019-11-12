import { createContext, useReducer } from "react";
import { movieReducer } from "./movieReducer";
import { API_KEY } from "../customEnv";
export const MovieContext = createContext();

export const GlobalState = ({ children }) => {
  const getMovies = async () => {
    try {
      dispatch({ type: "LOADING" });
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${API_KEY}`,
        {
          method: "GET"
        }
      );
      const data = await res.json();
      if (!data.status_message) {
        dispatch({ type: "GET_MOVIES", payload: data.results });
      } else {
        dispatch({ type: "ERROR", payload: data.status_message });
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
