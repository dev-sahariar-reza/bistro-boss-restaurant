const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
