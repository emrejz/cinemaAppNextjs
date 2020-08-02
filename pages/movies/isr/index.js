import { useState, useEffect } from "react";
import { InfoMessage } from "../../../styledComponents/InfoMessage";
import { Card } from "../../../styledComponents/Card";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";

const IsrMoviesPage = ({ initMovies }) => {
  const [movies, setMovies] = useState(initMovies);
  const [error, setError] = useState(null);
  const { data, error: err } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.NEXT_PUBLIC_DB_API_KEY}`
  );

  useEffect(() => {
    if ((data || err) && (!movies || movies.status_code)) {
      setMovies(data);
      setError(err);
      if (data && data.status_message) {
        setError(data.status_message);
      }
    }
  }, [data, err]);

  if (!movies || error || movies.status_code) {
    return (
      <InfoMessage lg error={error ? true : null}>
        {error ? "Error:" + error : "Loading..."}
      </InfoMessage>
    );
  }
  if (movies.results) {
    return (
      <div className="list">
        {movies.results.map((item) => (
          <Link
            key={item.id}
            passHref
            href="/movies/isr/[id]"
            as={"/movies/isr/" + item.id.toString()}
          >
            <Card as={"a"} key={item.id}>
              <div className="header">{item.title}</div>
              <img
                src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                alt={item.title}
              />
            </Card>
          </Link>
        ))}
      </div>
    );
  }
};
export async function getServerSideProps(context) {
  if (!context.req) {
    return {
      initMovies: null,
    };
  }
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.NEXT_PUBLIC_DB_API_KEY}`
  );
  const initMovies = await data.json();

  return {
    props: { initMovies },
  };
}
export default IsrMoviesPage;
