import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from './CarouselCard';
import sphynx from './pictures/sphynx.PNG';
import germanShepherd from './pictures/germanShepherd.PNG';
import yorkie from './pictures/yorkie.PNG';
import husky from './pictures/husky.PNG';
import burmilla from './pictures/burmilla.PNG';
import happy from './pictures/happy.PNG'
import PetFront from './main-pet';

const pictures = [sphynx, germanShepherd, yorkie, husky, burmilla /* add more images here */];



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselH = () => {
  return (
    <div>
        <PetFront />
        <div className="browse">
        <h1 className='welcome'>Welcome To Pet Shop <span>&#x1F638;</span></h1>
       </div>
       <div className="contact-us">
        <img className="happy" src={happy} alt="happy" />
        <div className="browse-text">
          <h2>
              Are you ready to add some joy and companionship to your life?
              Our furry friends are waiting for a loving family like yours to give them a chance at happiness.
         </h2>
           </div>
      </div>


      <h1 className="browse-pets">
      Browse our selection of adorable pets waiting for a forever home...
     </h1>
      <Carousel responsive={responsive}>
        {pictures.map((image, index) => (
          <CarouselCard key={index} image={image} />
        ))} 
      </Carousel>
     <h1 className="browse-pets">See More at Categories 🐾 </h1>
    </div>
  );
};

export default CarouselH;
