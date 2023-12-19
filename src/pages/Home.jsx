import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Footer from "../components/Footer";
import Vector from "../img/Vector.svg";
import Card from "../components/Card";
import { AllGamesContext } from "../context/FetchContext";
import { PopularityContext } from "../context/FetchContext";
import "./Home.scss";
import { useContext } from "react";

const Home = (props) => {
  const { allGames, setAllGames } = useContext(AllGamesContext);
  const GamesSortByDate = allGames.sort(
    (game1, game2) =>
      new Date(game2.release_date).getTime() -
      new Date(game1.release_date).getTime()
  );

  const { popularityGames, setPopularityGames } = useContext(PopularityContext);

  const popularGamesInBrowser = popularityGames.filter((game) =>
    game.platform.toLowerCase().includes("browser")
  );
  const popularGamesInPC = popularityGames.filter((game) =>
    game.platform.toLowerCase().includes("pc")
  );

  return (
    <section className="HomePage">
      <div className="headerPoster" name="top">
        <img src="" alt="" />
        <h1>Find & track the best free-to-play games!</h1>
      </div>
      <main>
        <section className="recentlyAdded">
          <h2>Recently Added</h2>
          <div>
            <Card
              thumbnail={GamesSortByDate[0]?.thumbnail}
              title={GamesSortByDate[0]?.title}
            />
            <Card
              thumbnail={GamesSortByDate[1]?.thumbnail}
              title={GamesSortByDate[1]?.title}
            />
            <Card
              thumbnail={GamesSortByDate[2]?.thumbnail}
              title={GamesSortByDate[2]?.title}
            />
            <Card
              thumbnail={GamesSortByDate[3]?.thumbnail}
              title={GamesSortByDate[3]?.title}
            />
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForPC">
          <h2>Top 4 Games for PC in June 2021</h2>
          <div className="topForPcCards">
            <Card
              thumbnail={popularGamesInPC[0]?.thumbnail}
              title={popularGamesInPC[0]?.title}
            />
            <div>
              <Card
                thumbnail={popularGamesInPC[1]?.thumbnail}
                title={popularGamesInPC[1]?.title}
              />
              <Card
                thumbnail={popularGamesInPC[2]?.thumbnail}
                title={popularGamesInPC[2]?.title}
              />
              <Card
                thumbnail={popularGamesInPC[3]?.thumbnail}
                title={popularGamesInPC[3]?.title}
              />
            </div>
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForBrowser">
          <h2>Top 4 Games for Browser in June 2021</h2>
          <div>
            <Card
              thumbnail={popularGamesInBrowser[0]?.thumbnail}
              title={popularGamesInBrowser[0]?.title}
            />
            <Card
              thumbnail={popularGamesInBrowser[1]?.thumbnail}
              title={popularGamesInBrowser[1]?.title}
            />
            <Card
              thumbnail={popularGamesInBrowser[2]?.thumbnail}
              title={popularGamesInBrowser[2]?.title}
            />
            <Card
              thumbnail={popularGamesInBrowser[3]?.thumbnail}
              title={popularGamesInBrowser[3]?.title}
            />
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Home;
