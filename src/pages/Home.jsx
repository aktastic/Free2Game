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
import TopIcon from "../components/TopIcon";

import "./Home.scss";

const Home = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const [top1GameInPc, setTop1GameInPc] = useState({});

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

  useEffect(() => {
    if (top1InPcID) {
      fetch(`https://www.freetogame.com/api/game?id=${top1InPcID}`)
        .then((res) => res.json())
        .then((game) => setTop1GameInPc(game));
    }
  }, [top1InPcID]);
  console.log(recentlyAddedGames);
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
                description={game.short_description}
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
              <TopIcon name="1" />
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
                  icon={<TopIcon name={index + 2} />}
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
