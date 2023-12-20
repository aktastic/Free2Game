import ButtonFilled from "./ButtonFilled";
import ButtonOutline from "./ButtonOutline";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import "./CardHorizontal.scss";

const CardHorizontal = (props) => {
  return (
    <>
      <div className="horizontal_card">
        <img src={props.thumbnail} alt="" />
        <div>
          <h2>{props.title}</h2>
          <ButtonFilled name="READ MORE" />
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
      </div>
    </>
  );
};

export default CardHorizontal;
