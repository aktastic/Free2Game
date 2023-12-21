import "./HeaderBanner.scss";
const HeaderBanner = (props) => {
  return (
    <>
      <div className="header_banner" name="top">
        <img src={props.url} alt="header_image" />
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default HeaderBanner;
