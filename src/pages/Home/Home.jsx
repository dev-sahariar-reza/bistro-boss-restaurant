import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Recommends from "../../components/ChiefRecommend/Recommends";
import Featured from "../../components/Featured/Featured";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <AboutUs />
      <PopularMenu />
      <Recommends />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
