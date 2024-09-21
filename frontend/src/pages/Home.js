import React from "react";
import LogementList from "../logement/logement-list";
import Banner from "../components/banner";

const Home = () => {
    return (
        <div className="home">
            <Banner label="Chez vous, partout et ailleurs" />
            <LogementList />
        </div>
    );
}

export default Home;
