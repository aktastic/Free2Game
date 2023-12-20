import { useState } from "react";
import "./Nav.scss"

const Nav = () => {
  // useState für Klick auf Searchbar-Container (div)
  const [onClickBorder, setOnClickBorder] = useState(false);

  // Funktion: Ändere den state (false --> true / true --> false) bei klick auf den Searchbar-Container (div)
  const changeBorderOnClick = () => {
    setOnClickBorder((borderColor) => !borderColor)
  }

  return (
    <>
    <section className="topnav_container">

    {/* Searchbar */}
    <form role="search">
      <div  className={onClickBorder ? " border_focus" : ""} >
        
        {/* Search Input-Field */}
        <input type="search" name="searchInput" id="searchInput" placeholder="Search..." onClick={changeBorderOnClick}/>

        {/* Search Button/Magnifying glass */}
        <button><img src="/lupe.png" alt="Lupe Icon" /></button>
        </div>
    </form>

    </section>
    
      
    </>
  );
};

export default Nav;
