
import PetFront from './main-pet';
import React from 'react';
import CarouselH from './CarouselH';
import koratImage from './pictures/korat.PNG';
import sphynxImage from './pictures/sphynx.PNG';

const images = [koratImage, sphynxImage];

function MainPage() {
 

  return (
    <div className="App">
      <CarouselH />
    </div>
  );
}

export default MainPage;