import ButtonFilled from "./ButtonFilled";
import ButtonOutline from "./ButtonOutline";
import "./Card.scss";
import Vector from "../img/Vector.svg";
import Group from "../img/Group.svg";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Card__Design">
        <img src={props.thumbnail} alt="" />
        <article>
          <div className="over_line">
            <h2>{props.title}</h2>
            <p>{props.description} </p>
            <ButtonFilled
              navigateFunc={() => navigate(`/details/${props.id}`)}
              name="READ MORE"
            />
          </div>
          {/* <hr /> */}
          {props.platform === "PC (Windows), Web Browser" ? (
            <div className="Bottom_Btns">

              <ButtonOutline filterfunc={props.filterfunc3} name={<img src={Vector} alt="Windows Logo" />} sceclass={props.outline}/>
              <ButtonOutline filterfunc={props.filterfunc4} name={<img src={Group} alt="Browser Logo" />} sceclass={props.outline}/>
              <ButtonOutline name={props.genre} filterfunc={props.filterfunc2} sceclass={props.outline}/>
            </div>
          ) : (
            <div className="Bottom_Btns">
              <ButtonOutline filterfunc={props.filterfunc1} name={<img src={props.svg} />} sceclass={props.outline}/>
              <ButtonOutline name={props.genre} filterfunc={props.filterfunc2} sceclass={props.outline}/>


            </div>
          )}
        </article>
      </div>
    </>
  );
};

export default Card;
