import { useContext, useEffect, useState } from "react";
import { DetailsContext, AllGamesContext } from "../context/FetchContext";

const FetchDetails = () => {
  const { detailsOfGames, setDetailsOfGames } = useContext(DetailsContext);
  const { allGames } = useContext(AllGamesContext);

  useEffect(() => {
    // for (const game of allGames) {
    //   fetch(`https://www.freetogame.com/api/game?id=${game.id}`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       detailsArray.push(json);
    //       setDetailsOfGames(detailsArray);
    //     });
    // }
    const detailsArray = [];
    let completedFetches = 0;
    const totalGames = allGames.length;

    allGames.forEach((element) => {
      fetch(`https://www.freetogame.com/api/game?id=${element.id}`)
        .then((res) => res.json())
        .then((json) => {
          detailsArray.push(json);
          completedFetches++;

          if (completedFetches === allGames.length) {
            setDetailsOfGames(detailsArray);
          }
        });
    });
  }, []);

  console.log(detailsOfGames);
};

export default FetchDetails;
