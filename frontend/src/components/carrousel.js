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
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 335px;
        height: 255px;
        border-radius: 10px;
    }
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

    @media (max-width: 768px) {
        display: none;
    }
`

const ArrowButton = styled.img`
    max-width: 48px;
    height: 80px;
    margin: 0 10px;
    cursor: pointer;

    @media (max-width: 768px) {
        max-width: 24px;
        height: 40px;
    }
`;

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

    const renderArrow = (images) => {
        if (images.length > 1) {
            return (
                <>
                    <ArrowWrapper className="arrow">
                        <ArrowButton
                            className="arrow-back"
                            src={arrowBack}
                            alt="arrowBack"
                            onClick={decrement}
                        />
                        <ArrowButton
                            className="arrow-forward"
                            src={arrowForward}
                            alt="arrowForward"
                            onClick={increment}
                        />
                    </ArrowWrapper>
                    <CounterWrapper>{currentIndex + 1}/{images.length}</CounterWrapper>
                </>
            );
        }
    }

    return (
        <CarrouselWrapper $backgroundImage={images[currentIndex]}>
            {renderArrow(images)}
        </CarrouselWrapper>
    );
}

export default Carrousel;
