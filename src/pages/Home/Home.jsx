import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Recommends from "../../components/ChiefRecommend/Recommends";
import Featured from "../../components/Featured/Featured";
import PopularMenu from "../../components/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <AboutUs />
      <PopularMenu />
      <Recommends />
      <Featured />
    </>
  );
};

export default Home;
