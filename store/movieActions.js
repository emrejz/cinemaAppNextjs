import { GET_MOVIES, GET_MOVIE, LOADING, ERROR } from "./movieReducer";
import { API_KEY } from "../customEnv";
export const getMovies = async dispatch => {
  try {
    dispatch({ type: LOADING });
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${API_KEY}`,
      {
        method: "GET"
      }
    );

    const data = await res.json();
    if (!data.status_message) {
      dispatch({ type: GET_MOVIES, payload: data.results });
    } else {
      dispatch({ type: ERROR, payload: data.status_message });
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message ? error.message : "Service error!"
    });
  }
};
export const addMovie = async (dispatch, id) => {
  try {
    dispatch({ type: LOADING });
    const res = await fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      {
        method: "GET"
      }
    );
    const data = await res.json();
    if (!data.status_message) {
      dispatch({ type: GET_MOVIE, payload: data });
    } else {
      dispatch({ type: ERROR, payload: data.status_message });
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message ? error.message : "Service error!"
    });
  }
};
