import React, { useState } from "react";
import collapseUp from "../images/collapse-up.png";
import collapseDown from "../images/collapse-down.png";

const Collapse = ({ label, className, content }) => {
    const [collapse, setCollapse] = useState(false);

    function handleDisplay() {
        return collapse ? 'flex' : 'none';
    }

    return (
        <div className={className}>
            <div className="collapse-btn large" onClick={() => setCollapse(!collapse)}>
                <label>{label}</label>
                {collapse 
                    ? (<img src={collapseUp} alt="Arrow icon" />)
                    : (<img src={collapseDown} alt="Arrow icon" />)
                }
            </div>
            <div className="collapse-content" style={{display: handleDisplay()}}>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;
