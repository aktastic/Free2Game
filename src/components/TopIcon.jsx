import "./TopIcon.scss";
const TopIcon = (props) => {
  return (
    <div className="top_icons">
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default TopIcon;
