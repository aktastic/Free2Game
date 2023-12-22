import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import "./RecentlyAdded.scss";
import ArrowRight from "../img/arrow-right.png";
import ArrowLeft from "../img/arrow-left.png";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import arrow1_left from "../img/arrows/arrow1_left.svg";
import arrow1_right from "../img/arrows/arrow1_right.svg";
import HeaderAllGame from "../components/HeaderAllGame";

const RecentlyAdded = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      {/* <div className="heroImg">
        <p>RECENTLY ADDED</p>
      </div> */}
      <HeaderAllGame
        url="https://s3-alpha-sig.figma.com/img/fcad/b8ad/11357d1983fd766136108d889aa4169f?Expires=1704067200&Signature=p5NhyhCGGwvQa4NmPxeq9fQXGcfQg97Tl2dpxM~TFs13xm7gSLUd4Xv2TtYNLTTuLOGErN95eacrQmuJMGI0sHjyzCmfMKm66vikz4M4qtYCxVuvizlhD6FusfAhVEgxjfmovHjk8O8jHawL4CkcADZdUmGcKS176UEYm4yLnbiswYggQT5npQdivivpsoURLAO6tmN4alJxRaz8R4uwL3ARaQiEblGx4h2Zj6baPnlq8uPSt5XNbsncekQ6pNgETktLzaCtqMbs3IYk83Mo6GZfqt66ewGH960QmdEvFHidNmXLYONGxwIIwcqKbb8nT0~5m7~5TkKuluPDmnvgJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        title="RECENTLY ADDED"
      />

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
                id={game.id}
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
