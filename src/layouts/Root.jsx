import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-390px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
