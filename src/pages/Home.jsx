import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Footer from "../components/Footer";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import { PopularityContext } from "../context/FetchContext";
import "./Home.scss";
import { useContext, useState } from "react";
import CardHorizontal from "../components/CardHorizontal";
import HeaderBanner from "../components/HeaderBanner";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const navigate = useNavigate()
  const gameFilter = (searchInput) =>{
    const filtered = allGames.filter((game)=>{
      return game.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    navigate('/allgames', {state: filtered})
  }
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

  return (
    <>
    <Nav searchFunc={gameFilter} btnShow={true}/>
    <section className="HomePage">
      <HeaderBanner />
      <main>
        <section className="recentlyAdded">
          <h2>Recently Added</h2>
          <div>
            {recentlyAddedGames?.map((game, index) => (
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
        <section className="topForPC">
          <h2>Top 4 Games for PC in June 2021</h2>
          <div className="topForPcCards">
            <div className="card_vertical_PC">
              <img
                src={popularGamesInPC[0]?.thumbnail}
                alt={popularGamesInPC[0]?.title}
              />
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
          <div>
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
    </>
  );
};

export default Home;
