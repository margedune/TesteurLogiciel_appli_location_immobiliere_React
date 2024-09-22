import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Carrousel from "../components/carrousel";
import Rate from "../components/rate";
import Collapse from "../components/collapse";
import { v4 as uuidv4 } from 'uuid';

const LogementDetailWrapper = styled.div`
    width: 100%;
`;

const LogementDescription = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & > div:nth-child(2) {
        justify-self: end;
    }
`;

const LocaliteTitle = styled.div`
    margin: 0;
    color: #FF6060;
    font-size: 1.7rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const LocaliteRegion = styled.div`
    font-size: 0.8rem;
    line-height: 26px;
`;

const HostWrapper = styled.div`
    color: #FF6060;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;

const HostName = styled.div`
    display: flex;
    flex-direction: column;  
`;

const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    background: #C4C4C4;
    border-radius: 64px;
`;

const TagsWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

const TagItem = styled.div`
    background-color: #FF6060;
    color: white;
    border-radius: 10px;
    width: 115px;
    height: 25px;
    font-size: 0.7rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CollapseWrapper = styled.div`
  justify-self: end;  /* Utilisé pour une grille */
  align-self: flex-end; /* Utilisé pour un conteneur flexbox */
  width: 90%;  /* Ajuste cette largeur selon tes besoins */
`;

const LogementDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState({});

    useEffect(function() {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(property => setProperty(property))
            .catch(error => console.error('Erreur lors de la récupération de la propriété :', error))
    }, []);

    return  (
        <LogementDetailWrapper>
            {property?.pictures?.length > 0
                ? (<Carrousel images={property?.pictures} />) 
                : (<div>Aucune image disponible</div>)
            }
            <br/>
            <LogementDescription>
                <div>
                    <LocaliteTitle>{property?.title}</LocaliteTitle>
                    <LocaliteRegion>{property.location}</LocaliteRegion>
                </div>
                <HostWrapper>
                    <HostName>
                        {property?.host?.name.split(" ").map((name) => (
                            <div key={uuidv4()}>{name}</div>
                        ))}
                    </HostName>
                    <HostPicture src={property?.host?.picture} />
                </HostWrapper>
                <TagsWrapper>
                    {property.tags !== undefined
                        ? (property.tags.map((tag) => (<TagItem key={uuidv4()}>{tag}</TagItem>)))
                        : (<div>Aucun tag</div>)
                    }
                </TagsWrapper>
                <Rate rating={parseInt(property?.rating)} />
                <Collapse 
                    label="Description"
                    width="100%"
                    btnHeight="52px"
                    content={property.description} 
                />    
                <Collapse
                    label="Equipement" 
                    width="100%"
                    btnHeight="52px"
                    content={property?.equipments?.map((equipment) => (
                        <div key={uuidv4()}>{equipment}</div>
                    ))}
                />
            </LogementDescription>
        </LogementDetailWrapper>
    );
}

export default LogementDetail;
