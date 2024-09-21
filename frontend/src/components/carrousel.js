import React, { useState } from "react";
import styled from "styled-components";
import arrowBack from '../images/arrow-back.png';
import arrowForward from '../images/arrow-forward.png';

const CarrouselWrapper = styled.div`
    width: 100%;
    height: 415px;
    border-radius: 25px;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;

const ArrowWrapper = styled.div`
   width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
`

const CounterWrapper = styled.div`
    max-width: 100%;
    color: white;

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`

const Carrousel = ({ images }) => {
    const maxCounter = images.length - 1; 
    const [currentIndex, setCurrentIndex] = useState(0);

    const increment = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === maxCounter ? 0 : prevIndex + 1
        );
    }

    const decrement = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? maxCounter : prevIndex - 1
        );
    }

    return (
        <CarrouselWrapper $backgroundImage={images[currentIndex]}>
            <ArrowWrapper className="arrow">
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
            </ArrowWrapper>
            <CounterWrapper>{currentIndex + 1}/{images.length}</CounterWrapper>
        </CarrouselWrapper>
    );
}

export default Carrousel;
