// AboutUs.js
import React from 'react';
import PetFront from './main-pet';

function AboutUs() {
  return(
    <div>
        <PetFront />
    <div className="about-us-container">
      
      <div className="about-us-content">
        <h1>Our Story</h1>
        <p>
          Welcome to Pet Shop, where furry friends and happy memories are made! Our journey began in 2016 with a passion to provide a loving home for all the animals that come through our doors. Since then, we've been growing and thriving, thanks to the love and support of our customers.
        </p>
        <p>
          We're proud to offer a wide range of dogs and cats from the most popular breeds, all at great prices. From cuddly kittens to playful puppies, we have the perfect companion for you and your family. Our team is dedicated to providing exceptional care and attention to each and every animal, ensuring they receive the love and nurturing they deserve.
        </p>
        <p>
          At Pet Shop, we believe that every furry friend deserves a second chance at a happy life. That's why we're committed to finding forever homes for our animals, and providing our customers with the best possible experience.
        </p>
        <div className="about-us-stats">
          <div className="stat">
            <h2>5+</h2>
            <p>Years of experience</p>
          </div>
          <div className="stat">
            <h2>100+</h2>
            <p>Animals adopted monthly</p>
          </div>
          <div className="stat">
            <h2>95%</h2>
            <p>Yearly customer reviews</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  ) 
}

export default AboutUs;