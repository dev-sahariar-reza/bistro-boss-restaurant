import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Our Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      />
    </div>
  );
};

export default OurMenu;
