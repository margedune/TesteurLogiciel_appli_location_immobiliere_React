import React from "react";
import logoFooter from "./images/logo-footer.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoFooter} alt="LogoFooter" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
