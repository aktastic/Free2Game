import { useContext, useEffect } from "react";
import { AllGamesContext } from "../context/FetchContext";

const FetchAllGames = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);

  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games",{
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fce86c3313msh5ea77e6a783d6fdp14d107jsn76c2fa395808",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAllGames(json);
      });
  }, []);
};

export default FetchAllGames;
