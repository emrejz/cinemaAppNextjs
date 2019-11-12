import { useContext, useEffect } from "react";
import { MovieContext } from "../store/GlobalState";
import { InfoMessage } from "../styledComponents/InfoMessage";
import { Card } from "../styledComponents/Card";
import { useRouter } from "next/router";

export default () => {
  const { state } = useContext(MovieContext);
  useEffect(() => {
    if (state.list.length === 0) state.getMovies();
  }, []);
  const router = useRouter();
  const posterUrl = path => {
    return "https://image.tmdb.org/t/p/original" + path;
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
          <Card
            key={item.id}
            onClick={() => router.push("/movie?id=" + item.id)}
          >
            <div className="header">{item.title}</div>
            <img src={posterUrl(item.poster_path)} alt={item.title} />
          </Card>
        ))}
      </div>
    </>
  );
};
