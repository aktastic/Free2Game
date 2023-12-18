import { useContext, useEffect } from "react";
import { RelevanceContext } from "../context/FetchContext";

const FetchRelevance = () => {
  const { relevanceGames, setRelevanceGames } = useContext(RelevanceContext);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games?sort-by=relevance")
      .then((res) => res.json())
      .then((json) => {
        setRelevanceGames(json);
      });
  }, []);
  console.log(relevanceGames);
};

export default FetchRelevance;
