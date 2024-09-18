import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <img src="/images/logo.png"></img>
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
