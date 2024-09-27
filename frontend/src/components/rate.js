import styled from "styled-components";
import starActive from "../images/star-active.png";
import starInactive from "../images/star-inactive.png";

const RateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const RateItem = styled.img`
  width: 18px;
  height: 18px;
`;

const Rate = ({ rating }) => {
  const totalStars = 5;
  const validRating = Math.min(Math.max(rating, 0), totalStars);
  const activeStars = validRating;
  const inactiveStars = totalStars - validRating;

  if (isNaN(activeStars)) {
    return <div></div>;
  }

  return (
    <RateWrapper>
      {Array(activeStars)
        .fill()
        .map((_, index) => (
          <RateItem key={index} src={starActive} alt={`Star ${index + 1}`} />
        ))}
      {Array(inactiveStars)
        .fill()
        .map((_, index) => (
          <RateItem
            key={index + activeStars}
            src={starInactive}
            alt={`Inactive Star ${index + 1}`}
          />
        ))}
    </RateWrapper>
  );
};

export default Rate;
