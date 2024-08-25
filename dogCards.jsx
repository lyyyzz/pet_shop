import cockerspaniel from './pictures/cockerspaniel.PNG'
import bulldog from './pictures/bulldog.PNG'
import goldenRetriever from './pictures/goldenRetriever.PNG'
import germanShepherd from './pictures/germanShepherd.PNG'

const images = {
    cockerspaniel: cockerspaniel,
    bulldog:bulldog,
    goldenRetriever:goldenRetriever,
    germanShepherd:germanShepherd,
  };

  const dogBreeds = [
    { id: 8, name: 'cockerspaniel', description:' Friendly, gentle, and outgoing, with a beautiful, flowing coat and a sweet, loving expression.', price:500, isPopular: false, stock:5},
    { id: 9, name: 'bulldog', description: 'Sturdy, laid-back, and endearing, with a wrinkled, lovable face and a unique, affectionate nature', price: 400, isPopular: false, stock: 7 },
    { id: 10, name: 'goldenRetriever', description: "Intelligent, loyal, and friendly, with a luscious golden coat, exuding warmth and enthusiasm.", price: 700, isPopular: false, stock: 2 },
    { id: 11, name: 'germanShepherd', description: "The German Shepherd is a confident, intelligent, and loyal breed with a muscular build and distinctive coat.", price: 600, isPopular: true, stock: 6 },
  ]

  export { dogBreeds, images };

  const DogCard = ({ breed }) => {
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
 
  export default DogCard