import React from "react";
import styled from "styled-components";
import logoFooter from "../images/logo-footer.png";

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    height: 209px;
    background-color: black;
    color: white;
`;

const Image = styled.img`
    width: 122px;
    height: 40px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Image src={logoFooter} alt="LogoFooter" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterWrapper>
    );
}

export default Footer;
