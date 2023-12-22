// import "./HeaderBanner.scss";
import "./HeaderAllGame.scss";

const HeaderAllGame = (props) => {
  return (
    <>
      <div className="header_banner_all_game" name="top">
        <img
          src={props.url}
        className="allgimg_2"/>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default HeaderAllGame;