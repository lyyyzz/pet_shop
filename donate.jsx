// Donate.js
// import React from 'react';
// import PetFront from './main-pet';
// import DonatePets from './pictures/donate.PNG'

// function Donate() {
//   return (
//     <div>
//         <PetFront />
//         <div>
//             <h1>Your Donation Makes a Difference!</h1>
//             <div className="donate">
//             <img className="donate-img" src={DonatePets} alt="donate" />
//             <div className="donate-txt-btn">
//             <p>
//             At Pet Shop, we're dedicated to providing a loving home for all the animals
//             that come through our doors.
//             From cuddly kittens to playful puppies,
//             we believe every furry friend deserves a second chance at a happy life.
//             </p>
//             <button>Donate</button>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Donate;

import React from 'react';
import PetFront from './main-pet';
import DonatePets from './pictures/donate.PNG';

function Donate() {
  return (
    <div>
        <PetFront />
    <div className="donate-container">
      <div className="donate">
        <img className="donate-img" src={DonatePets} alt="donate" />
        <div className="donate-txt-btn">
          <h1>Your Donation Makes a Difference!</h1>
          <p>
            At Pet Shop, we're dedicated to providing a loving home for all the animals
            that come through our doors.
            From cuddly kittens to playful puppies,
            we believe every furry friend deserves a second chance at a happy life.
          </p>
          <button>Donate</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Donate;