import "./Featured.css";
import img from "../../assets/Featured/featured.jpg";

const Featured = () => {
  return (
    <section className="boss-container featured">
      <div className="pt-10">
        <h3 className="boss-heading-subtext">---Check it out---</h3>
        <h1 className="boss-heading">FROM OUR MENU</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center p-10">
        <div>
          <img src={img} alt="featured image" loading="lazy" />
        </div>

        <div className="ml-0 lg:ml-5 mt-8 lg:mt-0">
          <p className="featured-text">March 20, 2023</p>
          <p className="featured-text">WHERE CAN I GET SOME?</p>
          <p className="featured-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn glass mt-5">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
