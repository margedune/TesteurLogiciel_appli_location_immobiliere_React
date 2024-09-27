import React from "react";
import styled from "styled-components";
import LogementList from "../logement/logement-list";
import Banner from "../components/banner";
import picture from "../images/chez-vous.png";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Banner 
                label="Chez vous, partout et ailleurs"
                backgroundImage={picture}
                dark={true}
            />
            <LogementList />
        </HomeWrapper>
    );
}

export default Home;
