import React from "react";
import { useNavigate } from 'react-router-dom';

const Property = ({ property }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/logement/${property.id}`);
    };

    return (
        <div className="logement-item" onClick={handleClick}>
            <span>{property.title}</span>
        </div>
    );
}

export default Property;
