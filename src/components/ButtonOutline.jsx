import "./ButtonOutline.scss";
const ButtonOutline = ({ name,filterfunc }) => {
  return (
    <>
      <button className="buttonOutline" onClick={filterfunc}>{name}</button>
    </>
  );
};

export default ButtonOutline;
