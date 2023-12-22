import { useContext, useEffect } from "react";
import { PopularityContext } from "../context/FetchContext";

const FetchPopularity = () => {
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);

  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",{
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fce86c3313msh5ea77e6a783d6fdp14d107jsn76c2fa395808",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
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
