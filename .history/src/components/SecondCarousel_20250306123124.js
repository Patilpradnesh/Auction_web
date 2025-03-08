import React, { useState } from 'react';
import './SecondCarousel.css';

const SecondCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="arrow left-arrow" onClick={goToPrevious}>
        &#9664;
      </button>
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt="carousel slide" />
      </div>
      <button className="arrow right-arrow" onClick={goToNext}>
        &#9654;
      </button>
    </div>
  );
};

export default SecondCarousel;
