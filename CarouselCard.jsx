import React from 'react';

const CarouselCard = ({ image,PopularBreeds }) => {
  return (
    <div className="carousel-cards">
      <img className='pictures' src={image} alt="picture" />
      <h2></h2>
    </div>
  );
};

export default CarouselCard;