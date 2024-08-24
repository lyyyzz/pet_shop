import React from 'react';
import { Link } from 'react-router-dom';

function PetFront() {
  return (
    <div className='hrefs'>
      <Link to="/">homepage</Link>
      <Link to="/about-us">about us</Link>
      <Link to="/donate">donate</Link>
      <Link to="/categories">categories</Link>
    </div>
  );
}

export default PetFront;
