import React from "react";
import styled from "styled-components";
import LogementList from "../logement/logement-list";
import Banner from "../components/banner";

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Banner label="Chez vous, partout et ailleurs" />
            <LogementList />
        </HomeWrapper>
    );
}

export default Home;
