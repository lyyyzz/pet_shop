
import { useState } from "react";
import React from "react";
import british from './pictures/british.PNG'
import sphynx from './pictures/sphynx.PNG'
import husky from './pictures/husky.PNG'
import yorkie from './pictures/yorkie.PNG'



const images = {
  british: british,
  sphynx: sphynx,
  husky: husky,
  yorkie: yorkie,
  
};

const breeds = [
    //popular
  { id: 1, name: 'british', description: 'Sturdy, compact, and short-coated, with a broad face and calm demeanor', price: 500, isPopular: true, stock: 10 },
  { id: 2, name: 'sphynx', description: 'Sleek, muscular, and hairless, with large ears and a wedge-shaped head.', price: 1000, isPopular: true, stock: 5 },
  { id: 3, name: 'husky', description: 'Medium-sized, athletic, and wolf-like, with a thick double coat and piercing eyes.', price: 800, isPopular: true, stock: 15 },
  { id: 4, name: 'yorkie', description: 'Small, spunky, and affectionate, with a silky, fine coat and a big personality in a tiny package', price: 600, isPopular: true, stock: 20 },
];
export { breeds, images };

const Card = ({ breed }) => {
    return (
      <div className="card-wrapper">
        <img className="pictures" src={images[breed.name]} alt={breed.name} />
        <div className="pet-details">
          <p>{breed.description}</p>
          <p>Price: ${breed.price}</p>
          <p>Is Popular: {breed.isPopular ? 'Yes' : 'No'}</p>
          <p>Stock: {breed.stock}</p>
        </div>
        <h2 className="breed-name">{breed.name}</h2>
      </div>
    );
  };



export default Card;

