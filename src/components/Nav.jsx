import { useState } from "react";
import "./Nav.scss";
import lupeIcon from "../img/lupe.png";

const Nav = ({ searchFunc, btnShow }) => {
  // useState für Klick auf Searchbar-Container (div)
  const [onClickBorder, setOnClickBorder] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleInputTwo = (e) => {
    setSearchInput(e.target.value);
    searchFunc(e.target.value);
  };
  const searchCheck = () => {
    searchFunc(searchInput);
  };
  const HomeClick = (e) =>{
    changeBorderOnClick()
    e.target.value = ""
  }
  // Funktion: Ändere den state (false --> true / true --> false) bei klick auf den Searchbar-Container (div)
  const changeBorderOnClick = () => {
    setOnClickBorder((borderColor) => !borderColor);
  };

  return (
    <>
      <section className="topnav_container">
        {/* Searchbar */}
        <form role="search">
          <div className={onClickBorder ? " border_focus" : ""}>
            {/* Search Input-Field */}
            {btnShow ? (
              <input
              type="search"
              name="searchInput"
              id="searchInput"
              value={searchInput}
              onChange={handleInput}
              placeholder="Search..."
              onClick={HomeClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchCheck();
              }}
            />
            ): (<input
              type="search"
              name="searchInput"
              id="searchInput"
              value={searchInput}
              onChange={handleInputTwo}
              placeholder="Search..."
              onClick={changeBorderOnClick}
              
            />)}

            {/* Search Button/Magnifying glass */}
            {btnShow ? (<button onClick={searchCheck}>
              <img src={lupeIcon} alt="Lupe Icon" />
            </button>):(<button>
              <img src={lupeIcon} alt="Lupe Icon" />
            </button>)}
          </div>
        </form>
      </section>
    </>
  );
};

export default Nav;
