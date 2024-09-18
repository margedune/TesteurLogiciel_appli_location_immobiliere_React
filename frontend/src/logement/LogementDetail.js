import React from "react";
import { useParams } from 'react-router-dom';

const LogementDetail = () => {
    const { id } = useParams();

    return  (<div>LogementDetail : {id}</div>);
}

export default LogementDetail;
