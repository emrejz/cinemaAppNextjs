import { Movie } from "../../../../styledComponents/Movie";
import { Header } from "../../../../styledComponents/Header";

const StaticMoviePage = ({ movie }) => {
  const backDropUrl = (path) => {
    return path ? "https://image.tmdb.org/t/p/original" + path : null;
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
export async function getStaticPaths() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.NEXT_PUBLIC_DB_API_KEY}`
  );
  const movies = await data.json();

  const paths = movies.results.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.NEXT_PUBLIC_DB_API_KEY}`
  );

  const movie = await data.json();

  return {
    props: {
      movie,
    },
  };
}
export default StaticMoviePage;
