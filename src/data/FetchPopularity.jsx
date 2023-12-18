import { useContext, useEffect } from "react";
import { PopularityContext } from "../context/FetchContext";

const FetchPopularity = () => {
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((res) => res.json())
      .then((json) => {
        setPopularityGames(json);
        console.log(popularityGames);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
};

export default FetchPopularity;
