import React from "react";
import styled from "styled-components";
import Banner from "../components/banner";
import Collapse from "../components/collapse";
import picture from "../images/Img_Apropos.png";

const AboutWrapper = styled.div`
    width: 90%;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

const About = () => {
    return (
        <AboutWrapper>
            <Banner backgroundImage={picture} dark={false} />
            <Collapse label="Fiabilité" width="70%" btnHeight="52px" />
            <Collapse label="Respect" width="70%" btnHeight="52px" />
            <Collapse label="Service" width="70%" btnHeight="52px" />
            <Collapse label="Sécurité" width="70%" btnHeight="52px" />
        </AboutWrapper>
    );
}

export default About;
