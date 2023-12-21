import "./Menu.scss";
import hamburger from "../img/Burger-Icon.svg";
import homeIcon from "../img/Home.svg";
import addIcon from "../img/Recently-Added.svg";
import logowhite from "../img/logowhite.png";
import logoIcon from "../img/logo.svg";
import logoWide from "../img/logowide.png";
import logoNew from "../img/logonew.png";
import gamesIcon from "../img/Games.png"
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const MenuNew = () => {
  // btn
  const [hamburgerNotClicked, setHamburgerNotClicked] = useState(true);

  // close-icon
  const [closeIconVisible, setCloseIconVisible] = useState(false);

  // sidebar
  const [sidebar, setSidebar] = useState(false);

  // Sidebar ausklappen & Close-Icon erscheint
  const openHamburgerMenu = () => {
    setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
    console.log("Hamburger State ist: ", hamburgerNotClicked);

    setCloseIconVisible((closeIconHidden) => !closeIconHidden);
    console.log("Close State ist: ", closeIconVisible);
  };

  // Sidebar schließen & Hamburger-Icon erscheint
  const closeHamburgerMenu = () => {
    setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
    console.log("Hamburger State ist: ", hamburgerNotClicked);

    setCloseIconVisible((closeIconHidden) => !closeIconHidden);
    console.log("Close State ist: ", closeIconVisible);
  };

  // für Logo- & Companyname-Link: Bei Klick auf Link, scrollt die Home-Page automatisch nach oben
  const scrollToTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <>
      {/* Logo + Companyname */}
      <Link to="/" className="link_to_home" onClick={scrollToTop}>
        <div
          className={
            hamburgerNotClicked ? "main-content-close" :  "main-content-side"
          }
        >
          {/* <img src={logoIcon} alt="Platzhalter Logo" /> */}
          {/* <img src={logoNew} alt="Platzhalter Logo" /> */}
          <img src={logoWide} alt="Platzhalter Logo" />
          {/* <img src={logowhite} alt="Platzhalter Logo" /> */}
          {/* <h3>FREE2GAME</h3> */}
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
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MenuNew;
