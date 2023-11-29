import img1 from "../../assets/chief-recommends/pizza-bg.jpg";
import img2 from "../../assets/chief-recommends/dessert-bg.jpeg";
import img3 from "../../assets/chief-recommends/soup-bg.jpg";

const Recommends = () => {
  return (
    <section className="boss-container">
      <div className="pt-10">
        <h3 className="boss-heading-subtext">---Should Try---</h3>
        <h1 className="boss-heading">CHEF RECOMMENDS</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card w-96 bg-[#f3f3f3] shadow-xl">
          <figure>
            <img src={img1} alt="Chief Recommend 1" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-5">Pizza</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              tempora!
            </p>
            <div className="card-actions">
              <button className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#f3f3f3] shadow-xl">
          <figure>
            <img src={img2} alt="Chief Recommend 2" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-5">Desert</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              tempora!
            </p>
            <div className="card-actions">
              <button className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#f3f3f3] shadow-xl">
          <figure>
            <img src={img3} alt="Chief Recommend 1" loading="lazy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-5">Soup</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              tempora!
            </p>
            <div className="card-actions">
              <button className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
