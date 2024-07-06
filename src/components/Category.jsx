import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Category = () => {
  return (
    <div>
      <div className="category-div">
        <h3 className="category font-sans">Category</h3>
      </div>

      <ul className="category-items font-sans font-normal">
        <li className="category-item-1">
          {" "}
          <Link>Water Bottles</Link>{" "}
        </li>
        <li className="category-item-2">
          {" "}
          <Link>Tote Bags</Link>{" "}
        </li>
        <li className="category-item-3">
          {" "}
          <Link>Crocs</Link>{" "}
        </li>
        <li className="category-item-4">
          {" "}
          <Link>Crocs</Link>
        </li>
        <li className="category-item-5">
          <Link>Crop tops </Link>
        </li>
        <li className="category-item-6">
          {" "}
          <Link>Bucket Hats</Link>
        </li>
        <li className="category-item-7">
          {" "}
          <Link>Jewelry Box</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
