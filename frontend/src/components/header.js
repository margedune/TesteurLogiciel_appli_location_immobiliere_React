import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HeaderWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
`;

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
    padding: 0;
    justify-content: center;
`;


const Li = styled.li`
    display: flex;
    margin: auto;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={logo} alt="Logo" />
            <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/about">A Propos</Link>
                </Li>
            </Ul>
        </HeaderWrapper>
    );
}

export default Header;
