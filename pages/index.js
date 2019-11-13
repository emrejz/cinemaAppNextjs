import { useContext, useEffect } from "react";
import { MovieContext } from "../store/GlobalState";
import { InfoMessage } from "../styledComponents/InfoMessage";
import { Card } from "../styledComponents/Card";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const { state, dispatch } = useContext(MovieContext);
  useEffect(() => {
    if (state.list.length === 0) state.getMovies(dispatch);
  }, []);
  const router = useRouter();
  const posterUrl = path => {
    return "https://image.tmdb.org/t/p/original" + path;
  };
  const goDetail = path => {
    return "/movie?id=" + path;
  };
  return (
    <>
      {(state.loading || state.error) && (
        <InfoMessage lg error={state.error ? true : null}>
          {state.loading ? "Loading..." : ""}
          {state.error ? "Error:" + state.error : ""}
        </InfoMessage>
      )}
      <div className="list">
        {state.list.map(item => (
          <Link
            key={item.id}
            href={goDetail(item.id)}
            //    as={"/movie/" + item.id.toString()}
          >
            <Card
              key={item.id}
              // onMouseEnter={() => {
              //   router.prefetch("/movie?id=" + item.id);
              // }} // Todo prefetch
            >
              <div className="header">{item.title}</div>
              <img src={posterUrl(item.poster_path)} alt={item.title} />
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};
