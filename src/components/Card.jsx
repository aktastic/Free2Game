import ButtonFilled from "./ButtonFilled";
import ButtonOutline from "./ButtonOutline";
import "./Card.scss";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";

const Card = (props) => {
  return (
    <>
      <div className="Card__Design">
        <img src={props.thumbnail} alt="" />
        <h2>{props.title}</h2>
        <ButtonFilled name="READ MORE" />

        <hr />
        {props.platform === "PC (Windows), Web Browser" ? (
          <div className="Bottom_Btns">
            <ButtonOutline name={<img src={Vector} alt="Windows Logo" />} />
            <ButtonOutline name={<img src={Group} alt="Browser Logo" />} />
            <ButtonOutline name={props.genre} />
          </div>
        ) : (
          <div className="Bottom_Btns">
            <ButtonOutline name={<img src={props.svg} />} />
            <ButtonOutline name={props.genre} />
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
