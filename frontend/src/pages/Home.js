import React from "react";
import LogementList from "../logement/LogementList";

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <LogementList />
        </div>
    );
}

export default Home;
