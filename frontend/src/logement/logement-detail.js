import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import Carrousel from "../components/carrousel";
import Rate from "../components/rate";
import Collapse from "../components/collapse";
import { v4 as uuidv4 } from 'uuid';

const LogementDetailWrapper = styled.div`
    width: 90%;
    margin: auto;
`;

const LogementDescription = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    & > div:nth-child(2) {
        justify-self: end;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
         "localite"
         "tags"
         "rate"
         "host"
         "description"
         "equipement"
    }
`;

const LocaliteWrapper = styled.div`
    

    @media (max-width: 768px) {
        grid-area: 'localite';
        order: 1;
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
    grid-area: 'host';

    @media (max-width: 768px) {
        order: 3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

const HostNameWarapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    @media (max-width: 768px) {
            font-size: 12px;
    }
`;

const HostName = styled.div`
    flex-direction: column;
`;

const HostNameItem = styled.div`
    padding-right: 5px;
    display: flex;
    justify-content: right;
`;

const HostPicture = styled.img`
    display: flex;
    width: 64px;
    height: 64px;
    background: #C4C4C4;
    border-radius: 64px;
`;

const TagsWrapper = styled.div`
    display: flex;
    gap: 5px;

    @media (max-width: 768px) {
        grid-area: 'tags';
        order: 2;
    }
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

    @media (max-width: 768px) {
        width: 84px;
        height: 18px;
        font-size: 0.55rem;
        border-radius: 5px;
    }
`;

const RateWrapper = styled.div`
    @media (max-width: 768px) {
        grid-area: 'rate';
        order: 4;
        position: absolute;
        display: none;
    }
`;

const RateWrapperMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const CollapseDescription = styled.div`
    @media (max-width: 768px) {
        grid-area: 'description';
        order: 5;

        display: flex;
        position: relative;
    }
`;

const CollapseEquipement = styled.div`
    @media (max-width: 768px) {
        grid-area: 'equipement';
        order: 6;

        display: flex;
        position: relative;
    }
`;

const LogementDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/properties/${id}`);
                if (!response.ok) {
                    throw new Error('Property not found');
                }
                const property = await response.json();
                
                // Si la propriété est vide ou ne contient pas d'enregistrement valide
                if (!property || Object.keys(property).length === 0) {
                    navigate('/404'); // Redirection vers la page 404
                } else {
                    setProperty(property);
                }
            } catch (error) {
                setError(error.message);
                navigate('/404'); // Redirection vers la page 404 en cas d'erreur
            }
        };

        fetchProperty();
    }, [id, navigate]);

    return  (
        <LogementDetailWrapper>
            {property?.pictures?.length > 0
                ? (<Carrousel images={property?.pictures} />) 
                : (<div>Aucune image disponible</div>)
            }
            <br/>
            <LogementDescription>
                <LocaliteWrapper>
                    <LocaliteTitle>{property?.title}</LocaliteTitle>
                    <LocaliteRegion>{property.location}</LocaliteRegion>
                </LocaliteWrapper>
                <HostWrapper>
                    <RateWrapperMobile>
                        <Rate rating={parseInt(property?.rating)} />
                    </RateWrapperMobile>
                    <HostNameWarapper>
                        <HostName>
                            {property?.host?.name.split(" ").map((name) => (
                                <HostNameItem key={uuidv4()}>{name}</HostNameItem>
                            ))}
                        </HostName>
                        <HostPicture src={property?.host?.picture} />
                    </HostNameWarapper>
                </HostWrapper>
                <TagsWrapper>
                    {property.tags !== undefined
                        ? (property.tags.map((tag) => (<TagItem key={uuidv4()}>{tag}</TagItem>)))
                        : (<div>Aucun tag</div>)
                    }
                </TagsWrapper>
                <RateWrapper>
                    <Rate rating={parseInt(property?.rating)} />
                </RateWrapper>
                <CollapseDescription>
                    <Collapse
                        label="Description"
                        width="100%"
                        btnHeight="52px"
                        content={property.description}
                    />    
                </CollapseDescription>
                <CollapseEquipement>
                    <Collapse
                        label="Equipement" 
                        width="100%"
                        btnHeight="52px"
                        content={property?.equipments?.map((equipment) => (
                            <div key={uuidv4()}>{equipment}</div>
                        ))}
                    />
                </CollapseEquipement>
            </LogementDescription>
        </LogementDetailWrapper>
    );
}

export default LogementDetail;
