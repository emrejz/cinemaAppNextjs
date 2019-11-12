import { Movie } from "../styledComponents/Movie";
import { useRouter } from "next/router";
import { MovieContext } from "../store/GlobalState";
import { useContext } from "react";
import { Header } from "../styledComponents/Header";

export default () => {
  const router = useRouter();
  const { state } = useContext(MovieContext);
  const movie = state.list.filter(item => item.id == router.query.id)[0];
  const backDropUrl = path => {
    return "https://image.tmdb.org/t/p/original" + path;
  };
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
};
