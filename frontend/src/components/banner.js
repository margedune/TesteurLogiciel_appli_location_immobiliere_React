import React from "react";
import styled from "styled-components";
import picture from "../images/chez-vous.png";

const BannerWrapper = styled.div` 
    background-image: url(${picture});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 223px;
    border-radius: 25px;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Banner = ({ label }) => {
    return (
        <BannerWrapper>
            <h1>{ label }</h1>
        </BannerWrapper>
    );
}

export default Banner;
