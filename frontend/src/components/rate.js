import React from "react";
import starActive from "../images/star-active.png";
import starInactive from "../images/star-inactive.png";

const Rate = ({ rating }) => {
  const totalStars = 5;
  const validRating = Math.min(Math.max(rating, 0), totalStars); 
  const activeStars = validRating;
  const inactiveStars = totalStars - rating;

  if (isNaN(activeStars)) {
    return (<div></div>)
  }

  return (
    <div className="rate right-column">
      {
        Array(activeStars).fill().map((_, index) => (
            <img key={index} src={starActive} alt={`Star ${index + 1}`} />
        ))
      }
      
      {
        Array(inactiveStars).fill().map((_, index) => (
            <img key={index + activeStars} src={starInactive} alt={`Inactive Star ${index + 1}`} />
        ))
      }
    </div>
  );
};

export default Rate;
