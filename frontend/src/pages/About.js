import React from "react";
import Banner from "../components/banner";
import DropdownOpen from "../components/collapse";

const About = () => {
    return (
        <div className="about">
            <Banner />
            <DropdownOpen label="Fiabilité" className="dropdown-open left-column" />
            <DropdownOpen label="Respect" className="dropdown-open left-column" />
            <DropdownOpen label="Service" className="dropdown-open left-column" />
            <DropdownOpen label="Sécurité" className="dropdown-open left-column" />
        </div>
    );
}

export default About;
