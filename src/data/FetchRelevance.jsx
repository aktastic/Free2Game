import { useContext, useEffect } from "react";
import { RelevanceContext } from "../context/FetchContext";

const FetchRelevance = () => {
  const { relevanceGames, setRelevanceGames } = useContext(RelevanceContext);

  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance",{
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fce86c3313msh5ea77e6a783d6fdp14d107jsn76c2fa395808",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setRelevanceGames(json);
      });
      console.log(relevanceGames)
  }, []);
  
};

export default FetchRelevance;
