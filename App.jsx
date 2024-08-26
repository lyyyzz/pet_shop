import React from 'react';
import { useState } from 'react';
import './App.css';
import PetFront from './main-pet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './aboutUs';
import Donate from './donate';
import Categories from './categories';
import Card from './petCards';
import { breeds } from './petCards';
import CatCard, { catBreeds } from './catCards';
import DogCard, {dogBreeds} from './dogCards';
import HomePage from './mainPage';
import Footer from './footer';






function App() {
  return (
  <div className='main-App'>
    <div className='main-title'>
      <h1>Pet Shop</h1>
    </div>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PetFront />} />
        <Route path="/categories" element={<Categories breeds={breeds} catBreeds={catBreeds} dogBreeds={dogBreeds} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
    <Footer />
</div>
  

  );  
}

export default App;


