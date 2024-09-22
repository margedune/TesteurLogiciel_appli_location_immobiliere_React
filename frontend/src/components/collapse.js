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
`

const CollapseContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
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
                    ? (<img src={collapseUp} alt="Arrow icon" />)
                    : (<img src={collapseDown} alt="Arrow icon" />)
                }
            </CollapseButton>
            <CollapseContent style={{display: handleDisplay()}}>
                {content}
            </CollapseContent>
        </CollapseWrapper>
    );
}

export default Collapse;
