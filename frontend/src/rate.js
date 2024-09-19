import React from "react";
import starActive from "./images/star-active.png"
import starInactive from "./images/star-inactive.png"

const Rate = () => {
    return (
        <div className="rate right-column">
            <img src={starActive} />
            <img src={starActive} />
            <img src={starActive} />
            <img src={starInactive} />
            <img src={starInactive} />
        </div>
    );
}

export default Rate;
