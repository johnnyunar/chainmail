import './App.css';
import logo from "../assets/armor250.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";


/**
 * The Header Component - currently shows up at the HP.
 * @returns {JSX.Element}
 */
const Header = () => {

    const [navbarActive, setNavbarActive] = useState(false)

    /**
     * Function that sets Background Active/Inactive based on scrolling
     */
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbarActive(true);
        } else {
            setNavbarActive(false);
        }
    }

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    })


    return (
        <>
            <div className="holder" id="holder">
                <nav className={navbarActive ? "navbar active" : "navbar"} role="navigation">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon="bars"/>
                </span>
                    <a href="/">
                        <img className="logo" src={logo} alt="Chainmail Logo"/>
                    </a>
                    <ul className="main-nav" id="js-menu">
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </>

    );
}

export default Header;