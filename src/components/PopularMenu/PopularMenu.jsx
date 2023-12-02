import MenuItems from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";
import { useMenu } from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="boss-container">
      <h3 className="boss-heading-subtext">---Check it out---</h3>
      <h1 className="boss-heading">FROM OUR MENU</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link>
          <button className="btn">View Full Menu</button>
        </Link>
      </div>

      <div className="bg-black text-white text-center text-2xl font-bold p-12 my-10 ">
        Call us: +88 123456789
      </div>
    </section>
  );
};

export default PopularMenu;
