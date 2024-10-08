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
            <Collapse
                label="Fiabilité" 
                width="70%" 
                btnHeight="52px"
                content="Les annonces postées sur KASA  garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes."
            />
            <Collapse
                label="Respect"
                width="70%" 
                btnHeight="52px"
                content="La bienveillance fait partie des valeurs fondatrices de KASA.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
                label="Service" 
                width="70%" 
                btnHeight="52px"
                content=" La qualité du service est au cœur de notre engagement chez KASA.
                Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires,
                soit empreinte de respect et de bienveillance." 
            />
            <Collapse 
                label="Sécurité" 
                width="70%" 
                btnHeight="52px"
                content="La sécurité est la priorité de KASA. Aussi bien pour nos hôtes que pour les voyageurs,
                chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
            />
        </AboutWrapper>
    );
}

export default About;
