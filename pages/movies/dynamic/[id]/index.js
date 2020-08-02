import { useState, useEffect } from "react";
import { Movie } from "../../../../styledComponents/Movie";
import { useRouter } from "next/router";
import { Header } from "../../../../styledComponents/Header";
import { InfoMessage } from "../../../../styledComponents/InfoMessage";
import useSWR from "swr";

const MoviePage = ({ initMovie }) => {
  const router = useRouter();
  const [movie, setMovie] = useState(initMovie);
  const [error, setError] = useState(null);
  const { id } = router.query;
  const { data, error: err } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_DB_API_KEY}`
  );

  useEffect(() => {
    if ((data || err) && (!movie || movie.status_code)) {
      setMovie(data);
      setError(err);
      if (data && data.status_message) {
        setError(data.status_message);
      }
    }
  }, [data, err]);
  const backDropUrl = (path) => {
    return path ? "https://image.tmdb.org/t/p/original" + path : null;
  };
  if (!movie)
    return (
      <InfoMessage lg load>
        Loading...
      </InfoMessage>
    );
  if (movie.status_message || error)
    return (
      <InfoMessage lg error>
        Error: {movie.status_message ? movie.status_message : error}
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
};

export async function getServerSideProps(context) {
  if (!context.req) {
    return {
      initMovie: null,
    };
  }
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.REACT_APP_DB_API_KEY}`
  );

  const initMovie = await data.json();

  return {
    props: {
      initMovie,
    },
  };
}
export default MoviePage;
