import { Link, useNavigate } from "react-router-dom";
import "./ButtonFilled.scss";

const ButtonFilled = ({ name , navigateFunc }) => {
  const navigate = useNavigate()
  return <button onClick={navigateFunc} className="buttonFilled">{name}</button>;
};

export default ButtonFilled;
