import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const AuctionCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
AuctionCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default AuctionCarousel;