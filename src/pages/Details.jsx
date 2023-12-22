import { useState, useEffect } from "react";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import "./Details.scss";
import { useParams } from "react-router-dom";
import HeaderBanner from "../components/HeaderBanner";
import HeaderAllGame from "../components/HeaderAllGame";

const Details = () => {
  const { id } = useParams();
  const [detailsOFGame, setDetailsOfGame] = useState();

  console.log(id);

  useEffect(() => {
    fetch(`https://www.freetogame.com/api/game?id=${id}`)
      .then((res) => res.json())
      .then((game) => setDetailsOfGame(game));
  }, [id]);

  console.log(detailsOFGame);

  return (
    <>
      <HeaderAllGame url={detailsOFGame?.screenshots[0].image} />
      {/* <HeaderBanner  /> */}
      <section className="details">
        {/* Details */}
        <h2>Hier kommen die Main Details</h2>
        <div className="details_wrapper">
          <div className="part_1">
            <article className="details_left">
              <img src={detailsOFGame?.thumbnail} alt="" />
              <h3>{detailsOFGame?.platform}</h3>
              <ButtonOutline name="Action" />
              <ButtonFilled name="Play Now" />
            </article>
            <article className="details_right">
              <h3>About</h3>
              <p>{detailsOFGame?.description}</p>
            </article>
          </div>
          {/* Beispielbilder */}
          <article className="part_2">
            <img
              src={detailsOFGame?.screenshots[1]?.image}
              alt="Bild Platzhalter"
            />
            <img
              src={detailsOFGame?.screenshots[2]?.image}
              alt="Bild Platzhalter"
            />
          </article>
          {/* Additional Info */}
          <div className="part_3">
            <article className="additional_info_container">
              <h3>Additional Information</h3>
              {/*   */}
              <p>
                Please note this free-to-play game may or may not offer optional
                in-game purchases.
              </p>
              <div className="additional_info">
                <h4>Developer</h4>
                <p>{detailsOFGame?.developer}</p>

                <h4>Publisher</h4>
                <p>{detailsOFGame?.publisher}</p>

                <h4>Release Date</h4>
                <p>{detailsOFGame?.release_date} </p>
              </div>
            </article>
            {/* System Requirements */}
            <article className="system_requirements_container">
              {/* bei "Plattform" props einfügen! */}
              <h3>Minimum System Requirements (Plattform)</h3>
              <div className="system_requirements_grid">
                <div>
                  <h4>OS</h4>
                  <p>{detailsOFGame?.minimum_system_requirements?.os}</p>
                </div>

                <div>
                  <h4>Memory</h4>
                  <p>{detailsOFGame?.minimum_system_requirements?.memory}</p>
                </div>

                <div>
                  <h4>Storage</h4>
                  <p>{detailsOFGame?.minimum_system_requirements?.storage} </p>
                </div>

                <div>
                  <h4>Processor</h4>
                  <p>{detailsOFGame?.minimum_system_requirements?.processor}</p>
                </div>

                <div>
                  <h4>Graphics</h4>
                  <p>{detailsOFGame?.minimum_system_requirements?.graphics}</p>
                </div>

                <div>
                  <h4>Additional Notes</h4>
                  <p>Specifictaions may change during development</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
