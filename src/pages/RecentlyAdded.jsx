import { useContext, useState } from "react";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import "./RecentlyAdded.scss";
import ArrowRight from "../img/arrow-right.png";
import ArrowLeft from "../img/arrow-left.png";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";

const RecentlyAdded = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const GamesSortByDate = allGames.sort(
    (game1, game2) =>
      new Date(game2.release_date).getTime() -
      new Date(game1.release_date).getTime()
  );
  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };
  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };
  return (
    <>
      <div className="heroImg">
        <p>RECENTLY ADDED</p>
      </div>
      <section className="recentlyAdded__Wrapper">
        <div className="btn_Navigation">
          <img src={ArrowLeft} alt="" onClick={handlePrevClick} />
        </div>
        <div className="cardsContainer">
          <div>
            {GamesSortByDate?.slice(startIndex, startIndex + itemsPerPage).map(
              (game) => (
                <Card
                  key={game.id}
                  thumbnail={game.thumbnail}
                  title={game.title}
                  genre={game.genre}
                  platform={game.platform}
                  svg={game.platform === "PC (Windows)" ? Vector : Group}
                />
              )
            )}
          </div>
        </div>
        <div className="btn_Navigation">
          <img src={ArrowRight} alt="" onClick={handleNextClick} />
        </div>
      </section>
    </>
  );
};

export default RecentlyAdded;
