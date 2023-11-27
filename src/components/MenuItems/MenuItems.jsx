const MenuItems = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  return (
    <div className="card card-side flex-col lg:flex-row justify-center items-center rounded-none lg:mb-6 lg:mr-6">
      <div>
        <img
          src={image}
          alt="food"
          className="lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-[200px] lg:w-[118px] lg:h-[104px]"
        />
      </div>

      <div className="card-body">
        <div className="lg:flex lg:justify-between lg:items-center mb-4">
          <h3 className="card-title lg:mr-5">{name}</h3>
          <p className="ml-5 text-[#BB8506]">Price: ${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItems;
