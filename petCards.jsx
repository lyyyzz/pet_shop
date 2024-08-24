
import { useState } from "react";
import React from "react";
import british from './british.PNG'
import sphynx from './sphynx.PNG'
import husky from './husky.PNG'
import yorkie from './yorkie.PNG'
import hamster from './hamster.PNG'


const images = {
  british: british,
  sphynx: sphynx,
  husky: husky,
  yorkie: yorkie,
  hamster: hamster,
};

const breeds = [
    //popular
  { id: 1, name: 'british', description: 'fluffy, cute british cat', price: 500, isPopular: true, stock: 10 },
  { id: 2, name: 'sphynx', description: 'furless aristocratic cat', price: 1000, isPopular: true, stock: 5 },
  { id: 3, name: 'husky', description: 'beautiful friendly loyal breed', price: 800, isPopular: true, stock: 15 },
  { id: 4, name: 'yorkie', description: 'cute small dog breed easy to take care of', price: 600, isPopular: true, stock: 20 },
  { id: 5, name: 'hamster', description: 'hamster', price: 5, isPopular: true, stock: 30 },
];
export { breeds, images };

const Card = ({ breed }) => {
  return (
    <div className="">
      <div className="card-wrapper">
        <img className="pictures" src={images[breed.name]} alt={breed.name} />
        <div className="pet-texts">
        <p>{breed.description}</p>
        <p>Price: ${breed.price}</p>
        <p>Is Popular: {breed.isPopular ? 'Yes' : 'No'}</p>
        <p>Stock: {breed.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

