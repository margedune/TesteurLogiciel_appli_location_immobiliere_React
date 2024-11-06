import { useState, React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HeaderWrapper = styled.nav`
    position: sticky;
    top: 0;
    background-color: white;
    align-items: center;
    width: 90%;
    height: 68px;
    margin: 10px auto;
    z-index: 1000;

    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }
`;

const Logo = styled.img`
    width: 210px;
    height: 68px;

    @media (max-width: 768px) {
        padding: 0 5px;
        width: 160px;
        height: 48px;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    gap: 20px;
    padding: 0;

    display: flex;
    justify-content: center;
`;

const Li = styled.li`
    margin: auto;
`;

const StyledLink = styled(Link)`
    text-decoration: ${(props) => (props.active === 'true' ? "underline" : "none")};
    color: ${(props) => (props.active ? "black" : "#ccc")};
    pointer-events: ${(props) => (props.active ? "auto" : "none")};
    text-underline-offset: 4px;
    color: black;
    font-weight: bold;
    padding: 10px;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
        font-weight: normal;
        text-transform: uppercase;
    }
`;

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { name: "Acceuil", path: "/" },
        { name: "A Propos", path: "/about" },
    ];
 
    return (
        <HeaderWrapper>
            <Logo src={logo} alt="Logo" />
            <Ul>
                {menuItems.map((item, index) => (
                    <Li key={index}>
                        <StyledLink
                            to={item.path}
                            active={`${activeIndex === index}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.name}
                        </StyledLink>
                    </Li>
                ))}
            </Ul>
        </HeaderWrapper>
    );
};

export default Header;
