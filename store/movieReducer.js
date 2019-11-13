export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";

export const movieReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: false,
        error: null,
        list: payload
      };
    case GET_MOVIE:
      return {
        ...state,
        loading: false,
        error: null,
        movie: payload
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        movie: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
