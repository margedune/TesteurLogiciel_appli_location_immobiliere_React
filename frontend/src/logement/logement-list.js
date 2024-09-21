import React, { useEffect, useState } from "react";
import Property from "../components/property";

const LogementList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(function () {
        fetch('http://localhost:8080/api/properties')
            .then(response => response.json())
            .then(properties => setProperties(properties))
            .catch(error => console.error('Erreur lors de la récupération des propriétés :', error));
    }, []);

    return (
        <div className="logement-list">
            {
                properties.length > 0 
                    ? (properties.map((property) => (
                        <Property key={property.id} property={property} />
                    ))) 
                    : (<p>Aucune propriété trouvée.</p>)
            }
        </div>
    );
}

export default LogementList;
