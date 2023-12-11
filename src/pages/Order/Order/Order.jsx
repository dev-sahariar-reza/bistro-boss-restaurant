import { Helmet } from "react-helmet-async";
import banner from "../../../assets/order food/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useMenu } from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover img={banner} title="Order Food" />

      <div className="boss-container">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Cocktail</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {salads.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pizzas.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {soups.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Order;
