import React, { useState } from "react";
import styled from "styled-components";
import collapseDown from "../images/collapse-down.png";

const CollapseWrapper = styled.div`
    width: ${(props) => props.$width};
`;

const CollapseButton = styled.div`
    background-color: #FF6060;
    color: white;
    border-radius: 5px;
    padding: 0 20px;
    height: ${(props) => props.$btnHeight};

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 30px;
        font-size: 0.8rem;
    }
`;

const CollapseArrow = styled.img`
    transition: transform 0.3s ease; /* Ajout de la transition */
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')}; /* Rotation */
    
    @media (max-width: 768px) {
        width: 14px;
        height: 8px;
    }
`;

const CollapseContent = styled.div`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    padding: 10px;
    background-color: #f6f6f6;
    height: 150px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const Collapse = ({ label, width, btnHeight, content }) => {
    const [open, setOpen] = useState(false);

    return (
        <CollapseWrapper $width={width}>
            <CollapseButton $btnHeight={btnHeight} onClick={() => setOpen(!open)}>
                <label>{label}</label>
                <CollapseArrow src={collapseDown} alt="Arrow icon" open={open} />
            </CollapseButton>
            <CollapseContent open={open}>
                {content}
            </CollapseContent>
        </CollapseWrapper>
    );
}

export default Collapse;
