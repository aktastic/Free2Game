import { useContext, useEffect } from "react";
import { PopularityContext } from "../context/FetchContext";

const FetchPopularity = () => {
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=popularity")
      .then((res) => res.json())
      .then((json) => {
        setPopularityGames(json);
      })
      .catch((err) => {
        console.error(err);
      });
      console.log(popularityGames)
  }, []);
  
};

export default FetchPopularity;
