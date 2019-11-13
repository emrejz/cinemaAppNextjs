import { createContext, useReducer } from "react";
import { movieReducer } from "./movieReducer";
import { getMovies, addMovie } from "./movieActions";

export const MovieContext = createContext();

export const GlobalState = ({ children }) => {
  const initState = {
    loading: false,
    error: null,
    list: [],
    movie: null,
    getMovies,
    addMovie
  };
  const [state, dispatch] = useReducer(movieReducer, initState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
