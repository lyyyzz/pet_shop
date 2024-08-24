import burmilla from './burmilla.PNG'
import korat from './korat.PNG'
import bombay from './bombay.PNG'

const images = {
    burmilla: burmilla,
    korat:korat,
    bombay:bombay,
  };

  const catBreeds = [
    { id: 6, name: 'burmilla', description:'black', price:500, isPopular: false, stock:5},
    { id: 7, name: 'korat', description: 'korat', price: 400, isPopular: false, stock: 7 },
    { id: 8, name: 'bombay', description: 'bombay', price: 700, isPopular: false, stock: 2 },
  ]

  export { catBreeds, images };

  const CatCard = ({ breed }) => {
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
 
  export default CatCard

