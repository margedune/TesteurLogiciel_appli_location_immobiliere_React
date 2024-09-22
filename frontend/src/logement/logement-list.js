import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Thumb from "../components/thumb";

const LogementListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 40px;
    background-color: lightgray;
    border-radius: 25px;

    justify-items: center;
    align-items: center;
`;

const LogementList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(function () {
        fetch('http://localhost:8080/api/properties')
            .then(response => response.json())
            .then(properties => setProperties(properties))
            .catch(error => console.error('Erreur lors de la récupération des propriétés :', error));
    }, []);

    return (
        <LogementListWrapper>
            {
                properties.length > 0 
                    ? (properties.map((property) => (
                        <Thumb key={property.id} property={property} />
                    ))) 
                    : (<p>Aucune propriété trouvée.</p>)
            }
        </LogementListWrapper>
    );
}

export default LogementList;
