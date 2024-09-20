import React from "react";
import arrowBack24px2 from "./images/arrow_back_ios-24px2.png";

const DropdownOpen = ({ label, className }) => {
    return (
        <div className={ className }>
            <label>{label}</label>
            <img src={arrowBack24px2} alt="Arrow icon" />
        </div>
    );
}

export default DropdownOpen;
