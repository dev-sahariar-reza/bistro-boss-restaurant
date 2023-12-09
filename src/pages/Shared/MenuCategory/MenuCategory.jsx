import MenuItems from "../../../components/MenuItems/MenuItems";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && (
        <Cover
          img={img}
          title={title}
          subTitle="Would you like to try a dish?"
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
