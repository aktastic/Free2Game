import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Footer from "../components/Footer";
import Vector from "../img/Vector.svg";

import "./Home.scss";
const Home = () => {
  return (
    <section className="HomePage">
      <div className="headerPoster" name="top">
        <h1>Find & track the best free-to-play games!</h1>
      </div>
      <main>
        <section className="recentlyAdded">
          <h2>Recently Added</h2>
          <div>
            <p>Card</p>
            <p>Card</p>
            <p>Card</p>
            <p>Card</p>
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForPC">
          <h2>Top 4 Games for PC in June 2021</h2>
          <div className="topForPcCards">
            <p>Card</p>
            <div>
              <p>Card</p>
              <p>Card</p>
              <p>Card</p>
            </div>
          </div>
          <ButtonFilled name="SHOW MORE" />
        </section>
        <section className="topForBrowser">
          <h2>Top 4 Games for Browser in June 2021</h2>
          <div>
            <p>Card</p>
            <p>Card</p>
            <p>Card</p>
            <p>Card</p>
          </div>
          <ButtonFilled name="SHOW MORE" />
          <ButtonOutline name={<img src={Vector} />} />
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Home;
