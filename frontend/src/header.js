import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
