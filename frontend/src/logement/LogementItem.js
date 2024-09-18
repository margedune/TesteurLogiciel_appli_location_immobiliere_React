import React from "react";
import { useNavigate } from 'react-router-dom';

const LogementItem = ({ logementId }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/logement/${logementId}`);
    };

    return (
        <div className="logement-item" onClick={handleClick}>
            <span>Titre de la location</span>
        </div>
    );
}

export default LogementItem;
