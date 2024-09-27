import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ThumbWrapper = styled.div`
    padding: 5px;
    background-color: #FF6060;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    color: white;
    cursor: pointer;
    position: relative;
`;

const Span = styled.span`
    align-self: flex-end; 
    justify-self: flex-start;
    position: absolute;
    bottom: 40px; 
    left: 20px;
`;

const Thumb = ({ property }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/logement/${property.id}`);
    };

    return (
        <ThumbWrapper $backgroundImage={property.cover} onClick={handleClick}>
            <Span>{property.title}</Span>
        </ThumbWrapper>
    );
}

export default Thumb;
