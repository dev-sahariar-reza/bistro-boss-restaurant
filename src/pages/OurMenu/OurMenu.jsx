import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import drinksImg from "../../assets/menu/drinks.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import { useMenu } from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Our Menu</title>
      </Helmet>

      {/* Main Cover */}
      <Cover
        img={menuImg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      />

      <div className="pt-10">
        <h3 className="boss-heading-subtext">---Dont Miss---</h3>
        <h1 className="boss-heading">Today's offer</h1>
      </div>

      {/* Today's offer items */}
      <MenuCategory items={offered} />

      {/* Dessert items */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg} />

      {/* Soup items */}
      <MenuCategory items={soup} title="Soup" img={soupImg} />

      {/* Salad items */}
      <MenuCategory items={salad} title="Salad" img={saladImg} />

      {/* Pizza items */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />

      {/* Dessert items */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg} />

      {/* Drink items */}
      <MenuCategory items={drinks} title="Soup" img={drinksImg} />
    </div>
  );
};

export default OurMenu;
