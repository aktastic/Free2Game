import ButtonFilled from "./ButtonFilled";
import "./Card.scss";

const Card = (props) => {
  return (
    <>
      <div className="Card__Design">
        <img src={props.thumbnail} alt="" />
        <h2>{props.title}</h2>
        <ButtonFilled name="READ MORE" />
        <hr />
        <div className="Bottom_Btns">
          <button>LOGO</button>
          <button>SHOOTER</button>
        </div>
      </div>
    </>
  );
};

export default Card;
