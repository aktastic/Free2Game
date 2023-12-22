import "./Menu.scss";
import hamburger from "../img/Burger-Icon.svg";
import homeIcon from "../img/Home.svg";
import addIcon from "../img/Recently-Added.svg";
import logoIcon from "../img/logo.svg";
import gamesIcon from "../img/Games.png"

import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import moon from "../img/moon.png";
import sun from "../img/sun.png";

const MenuNew = (props) => {
  // btn
  const [hamburgerNotClicked, setHamburgerNotClicked] = useState(true);

  // close-icon
  const [closeIconVisible, setCloseIconVisible] = useState(false);

  // sidebar
  const [sidebar, setSidebar] = useState(false);

  // Sidebar ausklappen & Close-Icon erscheint
  const openHamburgerMenu = () => {
    setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
    

    setCloseIconVisible((closeIconHidden) => !closeIconHidden);
    
  };

  // Sidebar schließen & Hamburger-Icon erscheint
  const closeHamburgerMenu = () => {
    setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
    

    setCloseIconVisible((closeIconHidden) => !closeIconHidden);
    
  };

  // für Logo- & Companyname-Link: Bei Klick auf Link, scrollt die Home-Page automatisch nach oben
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Logo + Companyname */}
      <Link to="/" className="link_to_home" onClick={scrollToTop}>
        <div
          className={
            hamburgerNotClicked ? "main-content-close" : "main-content-side"
          }
        >
          {/* Logo */}
          <img src={logoIcon} alt="Platzhalter Logo" />
          {/* Companyname */}
          <h2>FREE2GAME</h2>
        </div>
      </Link>

      {/* Menu Sidebar */}
      <aside
        className={hamburgerNotClicked ? "sidebar" : "sidebar sidebar_open"}
      >
        {/* Hamburger Menu */}
        <div>
          <img
            className="hamburger-menu"
            src={hamburger}
            alt="Hamburger Menu"
            onClick={openHamburgerMenu}
          />
          {/* Close Icon */}
          <a
            href="#"
            className={
              closeIconVisible ? "close-icon-visible" : "close-icon-invisible"
            }
            onClick={closeHamburgerMenu}
          >
            &#10005;
          </a>
        </div>

        <nav>
          <ul>
            {/* Home */}
            <li>
              <NavLink to="/">
                <img src={homeIcon} alt="" />
                <span
                  className={
                    hamburgerNotClicked
                      ? "nav-item-invisible"
                      : "nav-item-visible"
                  }
                >
                  Home
                </span>
              </NavLink>
            </li>
            {/* Games */}
            <li>
              <NavLink to="/allgames">
                <img src={gamesIcon} alt="" />
                <span
                  className={
                    hamburgerNotClicked
                      ? "nav-item-invisible"
                      : "nav-item-visible"
                  }
                >
                  All Games
                </span>
              </NavLink>
            </li>
            {/* Recently added */}
            <li>
              <NavLink to="/recentlyadded">
                <img src={addIcon} alt="" />
                <span
                  className={
                    hamburgerNotClicked
                      ? "nav-item-invisible"
                      : "nav-item-visible"
                  }
                >
                  Recently Added
                </span>
              </NavLink>
            </li>

            {/* Lightmode/Darkmode */}
            {/* <li onClick={props.onClick}>
              <img className="mode" src={props.darkMode ? sun : moon} alt="image light-/darkmode" />
              <span className={
                    hamburgerNotClicked
                      ? "nav-item-invisible"
                      : "nav-item-visible"
                  }>{props.darkMode ? "Light Mode" : "Dark Mode"}</span>
            </li> */}
          </ul>

          

        </nav>
        {/* Dark-/Lightmode */}
        {/* <div className="mode" onClick={props.onClick}>
          <img src={props.darkMode ? sun : moon} alt="mode" />
          <p>{props.darkMode ? "Light Mode" : "Dark Mode"}</p>
        </div> */}

      </aside>
    </>
  );
};

export default MenuNew;
