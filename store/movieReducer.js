export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_MOVIES = "GET_MOVIES";

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
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
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
