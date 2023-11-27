import { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="boss-container">
      <h3 className="boss-heading-subtext">---Check it out---</h3>
      <h1 className="boss-heading">FROM OUR MENU</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
