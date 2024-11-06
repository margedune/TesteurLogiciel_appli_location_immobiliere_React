import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
    position: relative; 
    background-image: 
        linear-gradient(rgba(0, 0, 0, ${(props) => props.$dark === true ? 0.5 : 0}), 
        rgba(0, 0, 0, 0.5)),
        url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 90%;
    height: 223px;
    margin: auto;
    border-radius: 25px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin: 0 auto;
        height: 111px;
        border-radius: 10px;

        display: flex;
        justify-content: left;
    }
`;

const H1 = styled.h1`
    @media (max-width: 768px) {
        width: 225px;
        height: 40px;
        font-size: 24px;
        line-height: 0.9;
        padding: 0 20px;
    }
`;

const Banner = ({ label, backgroundImage, dark }) => {
    return (
        <BannerWrapper $backgroundImage={backgroundImage} $dark={dark}>
            
            { label ? <H1>{label}</H1> : "" }
        </BannerWrapper>
    );
}

export default Banner;
