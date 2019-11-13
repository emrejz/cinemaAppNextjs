import { Movie } from "../styledComponents/Movie";
import { useRouter, Router } from "next/router";
import { MovieContext } from "../store/GlobalState";
import { useContext, useEffect, useState } from "react";
import { Header } from "../styledComponents/Header";
import { InfoMessage } from "../styledComponents/InfoMessage";

export default () => {
  const router = useRouter();
  const { state, dispatch } = useContext(MovieContext);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    let x = state.list.find(item => item.id == router.query.id);
    if (x) {
      setMovie(x);
    } else if (router.query.id) {
      state.addMovie(dispatch, router.query.id);
    }
  }, [router.query.id]);
  useEffect(() => {
    if (state.movie) setMovie(state.movie);
  }, [state.movie]);
  const backDropUrl = path => {
    return "https://image.tmdb.org/t/p/original" + path;
  };
  if (state.loading || state.error)
    return (
      <InfoMessage lg error={state.error ? true : null}>
        {state.loading ? "Loading..." : ""}
        {state.error ? "Error:" + state.error : ""}
      </InfoMessage>
    );
  if (movie)
    return (
      <Movie backdrop_path={backDropUrl(movie.backdrop_path)}>
        <div className="mainContext">
          <Header md color="black">
            {movie.title}
          </Header>
          <br />
          <div>
            <b>Original language :</b> {movie.original_language}
          </div>
          <br />
          <div>
            <b>Over view :</b> {movie.overview}
          </div>
          <br />
          <div>
            <b>Vote average :</b> {movie.vote_average}
          </div>
          <br />
          <div>
            <b>Release date :</b> {movie.release_date}
          </div>
        </div>
      </Movie>
    );
  else return <></>;
};
