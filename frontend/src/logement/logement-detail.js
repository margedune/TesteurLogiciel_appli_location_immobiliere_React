import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Carrousel from "../components/carrousel";
import Rate from "../components/rate";
import Collapse from "../components/collapse";
import { v4 as uuidv4 } from 'uuid';

const LogementDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState([]);

    useEffect(function() {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(property => setProperty(property))
            .catch(error => console.error('Erreur lors de la récupération de la propriété :', error))
    }, []);

    //console.log(property.tags);

    return  (
        <div className="logement-detail">
            <Carrousel />
            <br/>
            <div className="logement-description">
                <div className="logement-localite left-column">
                    <p>{property?.title}</p>
                    <span className="region">{property.location}</span>
                </div>
                <div className="host right-column">
                    <div className="host-name right-column">{property?.host?.name}</div>
                    <img className="host-picture right-column" src={property?.host?.picture} />
                </div>
                <div className="logement-tags left-column">
                    {property.tags !== undefined
                        ? (property.tags.map((tag) => (<div key={uuidv4()} className="tag-item">{tag}</div>)))
                        : (<div>Property not found</div>)
                    }
                </div>
                <Rate rating={parseInt(property?.rating)} />
                <Collapse 
                    label="Description" 
                    className="collapse collapse-large left-column" 
                    content={property.description} 
                />
                <Collapse
                    label="Equipement" 
                    className="collapse collapse-large right-column"
                    content={property.equipments}
                />
            </div>
        </div>
    );
}

export default LogementDetail;
