import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Thumb from "../components/thumb";

const LogementListWrapper = styled.div`
    background-color: lightgray;
    border-radius: 25px;
    width: 90%;
    margin: auto;

    @media (max-width: 768px) {
        background-color: transparent;
    }
`;

const GridWrapper = styled.div`
    margin: 40px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        margin: 0%;
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

const ThumbWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1; /* Cela garantit un carré parfait */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;

const LogementList = () => {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(function () {
        fetch('http://localhost:8080/api/properties')
            .then(response => response.json())
            .then(properties => setProperties(properties))
            .catch(error => {
                console.error('Erreur lors de la récupération des propriétés :', error);
                setError(error);
            })
        },
        []
    );

    return (
        <LogementListWrapper>
            <GridWrapper>
                {error ? (
                    <p>{error}</p>
                ) : properties.length > 0 ? (
                    properties.map((property) => (
                        <ThumbWrapper key={property.id}>
                            <Thumb property={property} />
                        </ThumbWrapper>
                    ))
                ) : (
                    <p>Aucune propriété trouvée.</p>
                )}
            </GridWrapper>
        </LogementListWrapper>
    );
}

export default LogementList;
