import { useContext, useEffect } from "react";
import { AllGamesContext } from "../context/FetchContext";

const FetchAllGames = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((res) => res.json())
      .then((json) => {
        setAllGames(json);
      });
  }, []);
};

export default FetchAllGames;
