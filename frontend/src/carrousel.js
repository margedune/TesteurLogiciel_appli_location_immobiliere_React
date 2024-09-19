import React, { useState } from "react";
import caroussel from './images/caroussel-1.png';
import arrowBack from './images/arrow-back.png';
import arrowForward from './images/arrow-forward.png';

const Carrousel = () => {
    const maxCounter = 6;
    const [counter, setCounter] = useState(maxCounter);
    const increment = () => {
        if (counter >= maxCounter) {
            setCounter(1);
            return;
        }
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter === 1) {
            setCounter(maxCounter);
            return;
        }
        setCounter(counter - 1)
    }

    return (
        <div className="carrousel">
            <div className="arrow">
                <img 
                    className="arrow-back"
                    src={arrowBack}
                    alt="arrowBack" 
                    onClick={decrement}
                />
                <img
                    className="arrow-forward"
                    src={arrowForward} 
                    alt="arrowForward"
                    onClick={increment}
                />
            </div>
            <div className="counter">{counter}/{maxCounter}</div>
        </div>
    );
}

export default Carrousel;
