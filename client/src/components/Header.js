import './App.css';
import logo from "../assets/armor250.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useEffect, useState} from "react";


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
        <div className="holder" id="holder">
            <nav className={navbarActive ? "navbar active" : "navbar"} role="navigation">
                <span className="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon="bars"/>
                </span>
                <a href="/">
                    <img className="logo" src={logo} alt="Chainmail Logo"/>
                </a>
                <ul className="main-nav" id="js-menu">
                    <li><a href="/" className="nav-links home">HOME</a></li>
                    <li><a href="/#about" className="nav-links">ABOUT</a></li>
                    <li>
                        <a href="/" className="nav-links" title="{% trans 'Account' %}">
                            <FontAwesomeIcon icon="user"/>
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Header;