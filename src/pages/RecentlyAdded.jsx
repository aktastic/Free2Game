import { useContext, useState } from "react";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import "./RecentlyAdded.scss";
import ArrowRight from "../img/arrow-right.png";
import ArrowLeft from "../img/arrow-left.png";
import arrow from "../img/arrow.svg";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import HeaderAllGame from "../components/HeaderAllGame";

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
    <div className="recently_added_page"> 
        <HeaderAllGame url="https://s3-alpha-sig.figma.com/img/fcad/b8ad/11357d1983fd766136108d889aa4169f?Expires=1704067200&Signature=p5NhyhCGGwvQa4NmPxeq9fQXGcfQg97Tl2dpxM~TFs13xm7gSLUd4Xv2TtYNLTTuLOGErN95eacrQmuJMGI0sHjyzCmfMKm66vikz4M4qtYCxVuvizlhD6FusfAhVEgxjfmovHjk8O8jHawL4CkcADZdUmGcKS176UEYm4yLnbiswYggQT5npQdivivpsoURLAO6tmN4alJxRaz8R4uwL3ARaQiEblGx4h2Zj6baPnlq8uPSt5XNbsncekQ6pNgETktLzaCtqMbs3IYk83Mo6GZfqt66ewGH960QmdEvFHidNmXLYONGxwIIwcqKbb8nT0~5m7~5TkKuluPDmnvgJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="Recently Added" />
        
      <section className="recentlyAdded__Wrapper">
        <div className="btn_Navigation">
          <img src={ArrowLeft} alt="" onClick={handlePrevClick} />
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
        <div className="btn_Navigation" onClick={handleNextClick}>>
          {/* <img src={arrow} alt="" onClick={handleNextClick} /> */}
        </div>
      </section>
    </div>
  );
};

export default RecentlyAdded;
