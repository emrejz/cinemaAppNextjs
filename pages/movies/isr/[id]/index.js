import { Movie } from "../../../../styledComponents/Movie";
import { Header } from "../../../../styledComponents/Header";
import { InfoMessage } from "../../../../styledComponents/InfoMessage";

const IsrMoviePage = ({ movie, error }) => {
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
export async function getStaticPaths() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.REACT_APP_DB_API_KEY}`
  );
  const movies = await data.json();

  const paths = movies.results.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  let movie = null;
  let error = null;
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.REACT_APP_DB_API_KEY}`
    );

    movie = await data.json();
  } catch (err) {
    error = err;
  }
  return {
    props: {
      movie,
      error,
    },
    revalidate: 1,
  };
}
export default IsrMoviePage;
