import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="boss-container hidden lg:block">
      <div className="about-us w-full h-[572px] relative">
        <div className="bg-white w-2/3 p-20 absolute top-32 left-64">
          <h1 className="boss-about-title">Bistro Boss Restaurant</h1>
          <p className="boss-about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
