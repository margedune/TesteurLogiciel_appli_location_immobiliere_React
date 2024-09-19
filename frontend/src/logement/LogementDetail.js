import React from "react";
import { useParams } from 'react-router-dom';
import Carrousel from "../carrousel";
import arrowBack24px2 from "../images/arrow_back_ios-24px2.png";
import Rate from "../rate";

const LogementDetail = () => {
    const { id } = useParams();

    return  (
        <div className="logement-detail">
            <Carrousel />
            <br/>
            <div className="logement-description">
                <div className="logement-localite left-column">
                    <p>Cozy loft on the Canal Saint-Martin</p>
                    <span className="region">Paris, Île-de-France</span>
                </div>
                <div className="logement-voter right-column">
                    <div className="right-column">Alexandre Dumas</div>
                    <div className="host right-column"></div>
                </div>
                <div className="logement-tags left-column">
                    <div className="tag-item">cozy</div>
                    <div className="tag-item">canal</div>
                    <div className="tag-item">paris 10</div>
                </div>
                <Rate />
                <div className="dropdown-open left-column">
                    <label>Description</label>
                    <img src={arrowBack24px2} />
                </div>
                <div className="dropdown-open right-column">
                    <label>Equipement</label>
                    <img src={arrowBack24px2} />
                </div>
            </div>
        </div>
    );
}

export default LogementDetail;
