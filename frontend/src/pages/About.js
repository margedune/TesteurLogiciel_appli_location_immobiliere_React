import React from "react";
import styled from "styled-components";
import Banner from "../components/banner";
import Collapse from "../components/collapse";

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

const About = () => {
    return (
        <AboutWrapper>
            <Banner />
            <Collapse label="Fiabilité" width="90%" btnHeight="52px" />
            <Collapse label="Respect" width="90%" btnHeight="52px" />
            <Collapse label="Service" width="90%" btnHeight="52px" />
            <Collapse label="Sécurité" width="90%" btnHeight="52px" />
        </AboutWrapper>
    );
}

export default About;
