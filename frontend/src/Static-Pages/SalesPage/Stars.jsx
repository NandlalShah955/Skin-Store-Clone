import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = (props) => {
  const { stars } = props;
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div>
      <div>{ratingStar}</div>
    </div>
  );
};

export default Stars;
