import burmilla from './pictures/burmilla.PNG'
import korat from './pictures/korat.PNG'
import bombay from './pictures/bombay.PNG'
import birman from './pictures/birman.PNG'

const images = {
    burmilla: burmilla,
    korat:korat,
    bombay:bombay,
    birman:birman,
  };

  const catBreeds = [
    { id: 5, name: 'burmilla', description:'Sleek, playful, and affectionate, with a stunning silver-grey coat and golden eyes.', price:500, isPopular: false, stock:5},
    { id: 6, name: 'korat', description: 'Silver-blue coat, heart-shaped face, and piercing green eyes, with a playful, curious, and loyal personality.', price: 400, isPopular: false, stock: 7 },
    { id: 7, name: 'bombay', description: 'Glossy black coat, golden or copper eyes, and a muscular build, with a playful, outgoing, and affectionate personality', price: 700, isPopular: false, stock: 2 },
    { id: 12, name: 'birman', description: 'The Birman is a calm, gentle, and affectionate cat with a distinctive pointed coat pattern and bright blue eyes.', price: 600, isPopular: false, stock: 2 },
  ]

  export { catBreeds, images };

  const CatCard = ({ breed }) => {
    return (
      <div className="">
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
      </div>
    );
  };
 
  export default CatCard

