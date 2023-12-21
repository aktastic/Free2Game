import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { AllGamesContext } from "../context/FetchContext";
import { PopularityContext } from "../context/FetchContext";

import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Footer from "../components/Footer";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import Card from "../components/Card";
import CardHorizontal from "../components/CardHorizontal";
import HeaderBanner from "../components/HeaderBanner";

import "./Home.scss";

const Home = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const GamesSortByDate = allGames.sort(
    (game1, game2) =>
      new Date(game2.release_date).getTime() -
      new Date(game1.release_date).getTime()
  );
  const recentlyAddedGames = GamesSortByDate.slice(0, 4);
  const { popularityGames, setPopularityGames } = useContext(PopularityContext);
  const popularGamesInBrowser = popularityGames.filter((game) =>
    game.platform.toLowerCase().includes("browser")
  );
  const top4InBrowser = popularGamesInBrowser.slice(0, 4);
  const popularGamesInPC = popularityGames.filter((game) =>
    game.platform.toLowerCase().includes("pc")
  );
  const top2_4InPc = popularGamesInPC.slice(1, 4);
  const top1InPcID = popularGamesInPC[0]?.id;

  const [top1GameInPc, setTop1GameInPc] = useState({});
  useEffect(() => {
    if (top1InPcID) {
      fetch(`https://www.freetogame.com/api/game?id=${top1InPcID}`)
        .then((res) => res.json())
        .then((game) => setTop1GameInPc(game));
    }
  }, [top1InPcID]);
  console.log(top1GameInPc);
  const trophies = [
    <svg width="50" height="80.2" viewBox="0 0 50 80.2" key={0}>
      <g>
        <path d="M29.9,19.8l-11.4,-19.8h-13.7l11.4,19.8z" />
        <path d="M45,0h-13.8l-4.3,7.5l7,12z" />
        <path d="M20.2,20.3l-0.2,-0.4l-0.2,0.4z" />
        <path d="M25,38.7c-9.1,0 -16.5,7.4 -16.5,16.5c0,9.1 7.4,16.5 16.5,16.5c9.1,0 16.5,-7.4 16.5,-16.5c0,-9.1 -7.4,-16.5 -16.5,-16.5zM31.3,65.2h-12.9v-2.2l6.3,-6.8c0.5,-0.6 1,-1.1 1.3,-1.5c0.4,-0.5 0.6,-0.9 0.9,-1.3c0.2,-0.4 0.4,-0.7 0.5,-1.1c0.1,-0.4 0.1,-0.7 0.1,-1c0,-0.5 -0.1,-0.9 -0.2,-1.2c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.3 -0.6,-0.5 -0.9,-0.6c-0.3,-0.1 -0.8,-0.2 -1.2,-0.2c-0.6,0 -1.1,0.1 -1.5,0.2c-0.4,0.2 -0.8,0.4 -1,0.7c-0.3,0.3 -0.5,0.7 -0.6,1.1c-0.1,0.4 -0.2,0.9 -0.2,1.5h-3.2c0,-0.8 0.2,-1.6 0.5,-2.4c0.3,-0.7 0.8,-1.4 1.3,-2c0.6,-0.6 1.3,-1 2.1,-1.3c0.8,-0.3 1.7,-0.5 2.7,-0.5c0.9,0 1.8,0.1 2.5,0.4c0.7,0.3 1.4,0.7 1.9,1.1c0.5,0.5 0.9,1.1 1.2,1.7c0.3,0.7 0.4,1.4 0.4,2.2c0,0.6 -0.1,1.2 -0.3,1.8c-0.2,0.6 -0.5,1.1 -0.8,1.7c-0.4,0.6 -0.8,1.1 -1.3,1.7c-0.5,0.6 -1,1.1 -1.6,1.7l-4.3,4.6h9v2.7z" />
        <path d="M35.7,32.6v-5c0,-1.2 -0.5,-2.3 -1.3,-3.1c-0.8,-0.8 -1.9,-1.3 -3.1,-1.3h-12.6c-1.2,0 -2.3,0.5 -3.1,1.3c-0.8,0.8 -1.3,1.9 -1.3,3.1v5c-8.5,4 -14.3,12.6 -14.3,22.6c0,13.8 11.2,25 25,25c13.8,0 25,-11.2 25,-25c0,-10 -5.9,-18.6 -14.3,-22.6zM17.2,27.6c0,-0.4 0.2,-0.8 0.4,-1.1c0.3,-0.3 0.6,-0.4 1.1,-0.4h12.7c0.4,0 0.8,0.2 1.1,0.4c0.3,0.3 0.4,0.6 0.4,1.1v3.9c-2.5,-0.8 -5.1,-1.3 -7.8,-1.3v0c-2.7,0 -5.4,0.4 -7.8,1.3v-3.9zM25,75.7c-11.4,0 -20.6,-9.2 -20.6,-20.6c0,-11.4 9.2,-20.6 20.6,-20.6c11.4,0 20.6,9.2 20.6,20.6c0,11.4 -9.2,20.6 -20.6,20.6z" />
      </g>
    </svg>,
    <svg width="50.0013" height="80.2" viewBox="0 0 50.0013 80.2" key={1}>
      <g>
        <path d="M30,19.8l-11.4,-19.8h-13.8l11.5,19.8z" />
        <path d="M20.3,20.3l-0.2,-0.4l-0.2,0.4z" />
        <path d="M45.1,0h-13.8l-4.3,7.5l7,12z" />
        <path d="M25.1,38.7c-9.1,0 -16.5,7.4 -16.5,16.5c0,9.1 7.4,16.5 16.5,16.5c9.1,0 16.5,-7.4 16.5,-16.5c0,-9.1 -7.4,-16.5 -16.5,-16.5zM31,62.2c-0.3,0.7 -0.8,1.3 -1.4,1.8c-0.6,0.5 -1.3,0.9 -2.1,1.1c-0.8,0.3 -1.6,0.4 -2.6,0.4c-0.8,0 -1.6,-0.1 -2.4,-0.3c-0.8,-0.2 -1.4,-0.6 -2,-1c-0.6,-0.4 -1,-1 -1.4,-1.7c-0.3,-0.7 -0.5,-1.5 -0.5,-2.4h3.2c0,0.4 0.1,0.8 0.2,1.2c0.2,0.4 0.4,0.7 0.7,0.9c0.3,0.3 0.6,0.5 1,0.6c0.4,0.1 0.8,0.2 1.3,0.2c0.5,0 1,-0.1 1.4,-0.2c0.4,-0.1 0.8,-0.3 1,-0.6c0.3,-0.3 0.5,-0.6 0.6,-1c0.1,-0.4 0.2,-0.8 0.2,-1.3c0,-0.6 -0.1,-1 -0.3,-1.4c-0.2,-0.4 -0.4,-0.7 -0.7,-1c-0.3,-0.3 -0.7,-0.4 -1.1,-0.6c-0.4,-0.1 -0.9,-0.2 -1.5,-0.2h-1.9v-2.5h1.9c0.6,0 1.1,-0.1 1.5,-0.2c0.4,-0.2 0.8,-0.4 1,-0.7c0.3,-0.2 0.5,-0.6 0.6,-0.9c0.1,-0.3 0.2,-0.8 0.2,-1.2c0,-0.5 -0.1,-0.9 -0.2,-1.2c-0.1,-0.4 -0.3,-0.7 -0.6,-0.9c-0.2,-0.2 -0.6,-0.4 -0.9,-0.6c-0.4,-0.1 -0.8,-0.2 -1.3,-0.2c-0.4,0 -0.8,0.1 -1.2,0.2c-0.4,0.1 -0.7,0.3 -0.9,0.5c-0.3,0.2 -0.5,0.5 -0.6,0.9c-0.2,0.3 -0.2,0.7 -0.2,1.1h-3.2c0,-0.8 0.2,-1.5 0.5,-2.1c0.3,-0.6 0.7,-1.2 1.3,-1.7c0.5,-0.5 1.2,-0.8 1.9,-1.1c0.7,-0.3 1.6,-0.4 2.5,-0.4c0.9,0 1.7,0.1 2.5,0.4c0.8,0.2 1.4,0.6 2,1c0.5,0.5 1,1 1.3,1.7c0.3,0.7 0.5,1.5 0.5,2.4c0,0.4 -0.1,0.8 -0.2,1.2c-0.1,0.4 -0.3,0.8 -0.5,1.2c-0.2,0.4 -0.5,0.7 -0.9,1c-0.4,0.3 -0.8,0.6 -1.3,0.8c0.6,0.2 1.1,0.4 1.5,0.8c0.4,0.3 0.7,0.7 1,1.1c0.3,0.4 0.4,0.8 0.6,1.3c0.1,0.5 0.2,0.9 0.2,1.4c-0.2,0.7 -0.4,1.5 -0.7,2.2z" />
        <path d="M35.8,32.6v-5c0,-1.2 -0.5,-2.3 -1.3,-3.1c-0.8,-0.8 -1.9,-1.3 -3.1,-1.3h-12.7c-1.2,0 -2.3,0.5 -3.1,1.3c-0.8,0.8 -1.3,1.9 -1.3,3.1v5c-8.5,4 -14.3,12.6 -14.3,22.6c0,13.8 11.2,25 25,25c13.8,0 25,-11.2 25,-25c0.1,-10 -5.8,-18.6 -14.2,-22.6zM17.2,27.6c0,-0.4 0.2,-0.8 0.4,-1.1c0.3,-0.3 0.6,-0.4 1.1,-0.4h12.7c0.4,0 0.8,0.2 1.1,0.4c0.3,0.3 0.4,0.6 0.4,1.1v3.9c-2.5,-0.8 -5.1,-1.3 -7.8,-1.3v0c-2.7,0 -5.4,0.4 -7.8,1.3v-3.9zM25.1,75.7c-11.4,0 -20.6,-9.2 -20.6,-20.6c0,-11.4 9.2,-20.6 20.6,-20.6c11.4,0 20.6,9.2 20.6,20.6c0,11.4 -9.3,20.6 -20.6,20.6z" />
      </g>
    </svg>,
    <svg width="50.0013" height="80.2" viewBox="0 0 50.0013 80.2" key={2}>
      <g>
        <path d="M20.4,20.3l-0.3,-0.4l-0.2,0.4z" />
        <path d="M45.1,0h-13.7l-4.4,7.5l7,12z" />
        <path d="M30.1,19.8l-11.5,-19.8h-13.7l11.4,19.8z" />
        <path d="M20.4,58.3h5.2v-8.2l-0.4,0.7z" />
        <path d="M25.1,38.7c-9.1,0 -16.5,7.4 -16.5,16.5c0,9.1 7.4,16.5 16.5,16.5c9.1,0 16.5,-7.4 16.5,-16.5c0,-9.1 -7.4,-16.5 -16.5,-16.5zM31.1,60.9h-2.4v4.3h-3.2v-4.3h-8.3l-0.1,-1.9l8.3,-13h3.3v12.4h2.4z" />
        <path d="M35.8,32.6v-5c0,-1.2 -0.5,-2.3 -1.3,-3.1c-0.8,-0.8 -1.9,-1.3 -3.1,-1.3h-12.7c-1.2,0 -2.3,0.5 -3.1,1.3c-0.8,0.8 -1.3,1.9 -1.3,3.1v5c-8.5,4 -14.3,12.6 -14.3,22.6c0,13.8 11.2,25 25,25c13.8,0 25,-11.2 25,-25c0.1,-10 -5.7,-18.6 -14.2,-22.6zM17.3,27.6c0,-0.4 0.2,-0.8 0.4,-1.1c0.3,-0.3 0.6,-0.4 1.1,-0.4h12.7c0.4,0 0.8,0.2 1.1,0.4c0.3,0.3 0.4,0.6 0.4,1.1v3.9c-2.5,-0.8 -5.1,-1.3 -7.8,-1.3v0c-2.7,0 -5.4,0.4 -7.8,1.3v-3.9zM25.1,75.7c-11.4,0 -20.6,-9.2 -20.6,-20.6c0,-11.4 9.2,-20.6 20.6,-20.6c11.4,0 20.6,9.2 20.6,20.6c0,11.4 -9.2,20.6 -20.6,20.6z" />
      </g>
    </svg>,
  ];

  return (
    <section className="HomePage">
      <HeaderBanner />
      <main>
        <section className="recentlyAdded">
          <h2>Recently Added</h2>
          <div className="grid_layout">
            {recentlyAddedGames?.map((game) => (
              <Card
                key={game.id}
                id={game.id}
                thumbnail={game.thumbnail}
                title={game.title}
                genre={game.genre}
                platform={game.platform}
                svg={game.platform === "PC (Windows)" ? Vector : Group}
              />
            ))}
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForPC">
          <h2>Top 4 Games for PC in June 2021</h2>
          <div className="topForPcCards">
            <div className="card_vertical_PC">
              <img
                src={
                  top1GameInPc.screenshots
                    ? top1GameInPc.screenshots[0].image
                    : popularGamesInPC[0]?.thumbnail
                }
                alt={top1GameInPc.title}
              />
              <svg width="50" height="80.2" viewBox="0 0 50 80.2">
                <g>
                  <path d="M25,38.7c-9.1,0 -16.5,7.4 -16.5,16.5c0,9.1 7.4,16.5 16.5,16.5c9.1,0 16.5,-7.4 16.5,-16.5c0,-9.1 -7.4,-16.5 -16.5,-16.5zM26.6,65.2h-3.2v-15.4l-4.9,1.8v-2.8l7.9,-2.9h0.2z" />
                  <path d="M20.2,20.3l-0.2,-0.4l-0.2,0.4z" />
                  <path d="M29.9,19.8l-11.4,-19.8h-13.7l11.4,19.8z" />
                  <path d="M45,0h-13.8l-4.3,7.5l7,12z" />
                  <path d="M35.7,32.6v-5c0,-1.2 -0.5,-2.3 -1.3,-3.1c-0.8,-0.8 -1.9,-1.3 -3.1,-1.3h-12.6c-1.2,0 -2.3,0.5 -3.1,1.3c-0.8,0.8 -1.3,1.9 -1.3,3.1v5c-8.5,4 -14.3,12.6 -14.3,22.6c0,13.8 11.2,25 25,25c13.8,0 25,-11.2 25,-25c0,-10 -5.8,-18.6 -14.3,-22.6zM17.2,27.6c0,-0.4 0.2,-0.8 0.4,-1.1c0.3,-0.3 0.6,-0.4 1.1,-0.4h12.7c0.4,0 0.8,0.2 1.1,0.4c0.3,0.3 0.4,0.6 0.4,1.1v3.9c-2.5,-0.8 -5.1,-1.3 -7.8,-1.3v0c-2.7,0 -5.4,0.4 -7.8,1.3v-3.9zM25,75.7c-11.4,0 -20.6,-9.2 -20.6,-20.6c0,-11.4 9.2,-20.6 20.6,-20.6c11.4,0 20.6,9.2 20.6,20.6c0,11.4 -9.2,20.6 -20.6,20.6z" />
                </g>
              </svg>
              <div className="over_image">
                <h2>{popularGamesInPC[0]?.title}</h2>

                <Link to={`/details/${popularGamesInPC[0]?.id}`}>
                  <ButtonFilled name="READ MORE" />
                </Link>

                <div className="outline_buttons">
                  <ButtonOutline
                    name={
                      <img
                        src={
                          popularGamesInPC[0]?.platform === "PC (Windows)"
                            ? Group
                            : Vector
                        }
                      />
                    }
                  />
                  <ButtonOutline name={popularGamesInPC[0]?.genre} />
                </div>
              </div>
            </div>
            <div className="horizontal_cards">
              {top2_4InPc?.map((game, index) => (
                <CardHorizontal
                  key={index}
                  icon={trophies[index]}
                  id={game.id}
                  thumbnail={game.thumbnail}
                  title={game.title}
                  genre={game.genre}
                  platform={game.platform}
                  svg={game.platform === "PC (Windows)" ? Vector : Group}
                />
              ))}
            </div>
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForBrowser">
          <h2>Top 4 Games for Browser in June 2021</h2>
          <div className="grid_layout">
            {top4InBrowser?.map((game, index) => (
              <Card
                key={index}
                id={game.id}
                thumbnail={game.thumbnail}
                title={game.title}
                genre={game.genre}
                platform={game.platform}
                svg={game.platform === "PC (Windows)" ? Vector : Group}
              />
            ))}
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Home;
