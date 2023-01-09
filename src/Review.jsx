import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(2);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <img src={image} alt={name} className="review-img" />

      <div className="review-info">
        <h4 className="review-author">{name}</h4>
        <h5 className="review-job">{job}</h5>
        <p className="review-text">{text}</p>
      </div>
      <div className="btn-container">
        <button type="button" className="prev-btn btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
