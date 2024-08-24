import cockerspaniel from './cockerspaniel.PNG'
import bulldog from './bulldog.PNG'
import goldenRetriever from './goldenRetriever.PNG'

const images = {
    cockerspaniel: cockerspaniel,
    bulldog:bulldog,
    goldenRetriever:goldenRetriever,
  };

  const dogBreeds = [
    { id: 9, name: 'cockerspaniel', description:'cockerspaniel', price:500, isPopular: false, stock:5},
    { id: 10, name: 'bulldog', description: 'bulldog', price: 400, isPopular: false, stock: 7 },
    { id: 11, name: 'goldenRetriever', description: 'goldenRetriever', price: 700, isPopular: false, stock: 2 },
  ]

  export { dogBreeds, images };

  const DogCard = ({ breed }) => {
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
 
  export default DogCard