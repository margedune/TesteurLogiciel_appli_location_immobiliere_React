import React, { useState } from "react";
import styled from "styled-components";
import collapseUp from "../images/collapse-up.png";
import collapseDown from "../images/collapse-down.png";

const CollapseWrapper = styled.div`
    width: ${(props) => props.$width};
`;

const CollapseButton = styled.div`
    background-color: #FF6060;
    color: white;
    border-radius: 10px;
    padding: 0 20px;
    height: ${(props) => props.$btnHeight};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        height: 30px;
        font-size: 0.7rem;
    }
`;

const CollapseArrow = styled.img`
    @media (max-width: 768px) {
        width: 14px;
        height: 8px;
    }
`;

const CollapseContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`

const Collapse = ({ label, width, btnHeight, content }) => {
    const [collapse, setCollapse] = useState(false);

    function handleDisplay() {
        return collapse ? 'flex' : 'none';
    }

    return (
        <CollapseWrapper $width={width}>
            <CollapseButton $btnHeight={btnHeight} onClick={() => setCollapse(!collapse)}>
                <label>{label}</label>
                {collapse 
                    ? (<CollapseArrow src={collapseUp} alt="Arrow icon" />)
                    : (<CollapseArrow src={collapseDown} alt="Arrow icon" />)
                }
            </CollapseButton>
            <CollapseContent style={{display: handleDisplay()}}>
                {content}
            </CollapseContent>
        </CollapseWrapper>
    );
}

export default Collapse;
