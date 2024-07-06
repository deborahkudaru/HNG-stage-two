import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
// import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customBlue navbar">
        {/* <Logo /> */}
        <ul className="nav-item font-sans font-normal">
          <li className="nav-item-1">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="nav-item-2">
            {" "}
            <Link>Market place</Link>{" "}
          </li>
          <li className="nav-item-3">
            {" "}
            <Link>About</Link>{" "}
          </li>
          <li className="nav-item-4">
            {" "}
            <Link>Reviews</Link>{" "}
          </li>
          <li className="nav-item-5">
            <Link>Delivery</Link>
          </li>
        </ul>

        <div className="icons">
          <Link>
            {" "}
            <IoMdNotificationsOutline className="notification-icon" />
          </Link>
          <Link to="/shopping-cart">
            {" "}
            <IoCartOutline className="cart-icon" />
          </Link>
          <Link>
            <FaRegCircleUser className="user-icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
