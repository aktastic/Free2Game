import { useContext, useState } from "react";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import "./RecentlyAdded.scss";
import ArrowRight from "../img/arrow-right.png";
import ArrowLeft from "../img/arrow-left.png";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import arrow1_left from "../img/arrows/arrow1_left.svg";
import arrow1_right from "../img/arrows/arrow1_right.svg";

const RecentlyAdded = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 12;
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
        <div onClick={handlePrevClick} className="btn_Navigation">
          <svg width="16.8" height="30" viewBox="0 0 13.9204 24.8407">
            <path
              d="M12.4204,1.5l-10.9204,10.9204l10.9204,10.9203"
              data-paper-data='{"rotation":135}'
            ></path>
          </svg>
        </div>
        <div className="cardsContainer">
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
        <div className="btn_Navigation" onClick={handleNextClick}>
          {/* <img src={ArrowRight} alt="" onClick={handleNextClick} /> */}

          <svg width="16.8" height="30" viewBox="0 0 13.9204 24.8408">
            <path
              d="M1.5,1.5l10.9204,10.9204l-10.9204,10.9204"
              data-paper-data='{"rotation":45}'
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default RecentlyAdded;
