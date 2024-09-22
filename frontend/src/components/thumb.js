import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ThumbWrapper = styled.div`
    background-color: #FF6060;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    width: 90%;
    height: 200px;
    padding: 20px;
    border-radius: 5px;

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
    bottom: 20px; 
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
