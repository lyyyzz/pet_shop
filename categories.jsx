// Categories.js
import React from 'react';
import Card from './petCards';
import CatCard from './catCards';
import DogCard from './dogCards';
import PetFront from './main-pet';

function Categories({ breeds, catBreeds, dogBreeds }) {
    return (
      <div>
        <PetFront />
        <h1 className="popular-breeds">Most Popular Breeds</h1>
        <div className="pet-card-wrapper">
          {breeds.map((breed, index) => (
            <div
              className={`pet-card-each-wrapper ${index % 2 === 0 ? '' : 'right-side'}`}
            >
              <Card key={breed.id} breed={breed} />
            </div>
          ))}
        </div>
        <div>
          <h1 className="cats-title">Cat Breeds</h1>
          <div className="pet-card-wrapper">
            {catBreeds.map((catbreed) => (
              <div className="pet-card-each-wrapper">
                <CatCard key={catbreed.id} breed={catbreed} />
              </div>
            ))}
          </div>
        </div>
        <div className="dog-wrapper">
          <h1 className="dogs-title">Dog Breeds</h1>
          <div className="pet-card-wrapper">
            {dogBreeds.map((dogbreed) => (
              <div className="pet-card-each-wrapper">
                <DogCard key={dogbreed.id} breed={dogbreed} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
   
   


export default Categories;