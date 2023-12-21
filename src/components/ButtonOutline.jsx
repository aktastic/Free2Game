import "./ButtonOutline.scss";
const ButtonOutline = ({ name,filterfunc, sceclass }) => {
  return (
    <>
      <button className={`buttonOutline ${sceclass}`} onClick={filterfunc}>{name}</button>
    </>
  );
};

export default ButtonOutline;
