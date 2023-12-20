import "./MenuNew.scss";
import hamburger from "./../../public/Burger-Icon.svg";
import homeIcon from "./../../public/Home.svg";
import addIcon from "./../../public/Recently-Added.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const MenuNew = () => {
    // btn
    const [hamburgerNotClicked, setHamburgerNotClicked] = useState(true);

    // close-icon
    const [closeIconVisible, setCloseIconVisible] = useState(false);

    // sidebar
    const [sidebar, setSidebar] = useState(false);

    // Bei Klick auf Hamburger-Icon öffnet sich die Sidebar + das Hamburger-Icon verschwindet + das Close-Icon erscheint
    const openHamburgerMenu = () => {
        setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
        console.log("Hamburger State ist: ", hamburgerNotClicked);

        setCloseIconVisible((closeIconHidden) => !closeIconHidden)
        console.log("Close State ist: ", closeIconVisible);
    }

    // Bei Klick auf das Close-Icon schließt sich die Sidebar + das Close-Icon verschwindet + das Hamburger-Icon erscheint
    const closeHamburgerMenu = () => {
        setHamburgerNotClicked((hamburgerIsNotClicked) => !hamburgerIsNotClicked);
        console.log("Hamburger State ist: ", hamburgerNotClicked);

        setCloseIconVisible((closeIconHidden) => !closeIconHidden)
        console.log("Close State ist: ", closeIconVisible);
    }

    return ( 
        <>
        {/* Logo + Companyname */}
        <div className={hamburgerNotClicked ? "main-content-close" : "main-content-side"}>
            <img src="./../logo.svg" alt="Platzhalter Logo" />
            <h3>FREE2GAME</h3>
        </div>

        {/* Menu Sidebar */}
        <aside className={hamburgerNotClicked ? "sidebar" : "sidebar sidebar_open"}>
            <div>
                <img className="hamburger-menu" src={hamburger} alt="Hamburger Menu" onClick={openHamburgerMenu}/>

                <a href="#" className={closeIconVisible ? "close-icon-visible" : "close-icon-unvisible"} onClick={closeHamburgerMenu}>&times;</a>
            </div>

            <nav>
                <ul>
                    {/* Home */}
                    <li>
                        <NavLink to="/">
                            <img src={homeIcon} alt="" />
                            <span className={hamburgerNotClicked ? "nav-item-unvisible" : "nav-item-visible"}>Home</span>
                        </NavLink>
                    </li>
                    {/* Games */}
                    <li>
                        <NavLink to="/allgames">
                            <img src="./../../public/Games.png" alt="" />
                            <span className={hamburgerNotClicked ? "nav-item-unvisible" : "nav-item-visible"}>All Games</span>
                        </NavLink>
                    </li>
                    {/* Recently added */}
                    <li>
                        <NavLink to="/recentlyadded">
                            <img src={addIcon} alt="" />
                            <span className={hamburgerNotClicked ? "nav-item-unvisible" : "nav-item-visible"}>Recently Added</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>

        </>
     );
}
 
export default MenuNew;