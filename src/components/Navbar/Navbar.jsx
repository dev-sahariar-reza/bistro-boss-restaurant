import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRoute = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "boss-active-link" : "boss-not-active-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "boss-active-link" : "boss-not-active-link"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive ? "boss-active-link" : "boss-not-active-link"
          }
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "boss-active-link" : "boss-not-active-link"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navRoute}
          </ul>
        </div>
        <a className="btn btn-ghost text-base lg:text-xl">
          Bistro Boss Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navRoute}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
