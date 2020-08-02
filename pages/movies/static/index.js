import { Card } from "../../../styledComponents/Card";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const StaticMoviesPage = ({ movies }) => {
  const router = useRouter();
  return (
    <div className="list">
      {movies.results.map((item) => (
        <Link
          key={item.id}
          passHref
          prefetch={false}
          href="/movies/static/[id]"
          as={"/movies/static/" + item.id.toString()}
        >
          <Card
            as={"a"}
            key={item.id}
            onMouseEnter={() => {
              router.prefetch(
                "/movies/static/[id]",
                "/movies/static/" + item.id.toString(),
                {}
              );
            }}
          >
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
};

export async function getStaticProps(context) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.REACT_APP_DB_API_KEY}`
  );
  const movies = await data.json();

  return {
    props: { movies },
  };
}
export default StaticMoviesPage;
