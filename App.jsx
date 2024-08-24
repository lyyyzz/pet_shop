import React from 'react';
import { useState } from 'react';
import './App.css';
import PetFront from './main-pet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './petCards';
import { breeds } from './petCards';
import CatCard, { catBreeds } from './catCards';
import DogCard, {dogBreeds} from './dogCards';

function App() {
  return (
  <div className='main-App'>
    <div className='main-title'>
      <h1>Pet Shop</h1>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PetFront />} />
    </Routes>
   </BrowserRouter>

   <h1 className="popular-breeds">Most Popular Breeds</h1>
   <div className="pet-card-wrapper">
  {breeds.map(breed => (
    <Card key={breed.id} breed={breed} />
  ))}

    </div>
    <div>
      <h1>cats</h1>
      <div className="pet-card-wrapper">
  {catBreeds.map(catbreed => (
    <CatCard key={catbreed.id} breed={catbreed} />
  ))}

    </div>
    </div>

<div className="dog-wrapper">
<h1>dogs</h1>
    <div className="pet-card-wrapper"> 
    {dogBreeds.map(dogbreed => (
    <DogCard key={dogbreed.id} breed={dogbreed} />
  ))}
    </div>
</div>
</div>
  

  );
}

export default App;


