import { createContext, useReducer } from "react";
import { movieReducer } from "./movieReducer";
export const MovieContext = createContext();

export const GlobalState = ({ children }) => {
  const getMovies = async () => {
    try {
      dispatch({ type: "LOADING" });
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      if (data.ok) {
        let lastData = await data.json();
        dispatch({ type: "GET_MOVIES", payload: lastData });
      } else {
        dispatch({ type: "ERROR", payload: data.statusText });
      }
    } catch (error) {
      dispatch({ type: "ERROR" });
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
