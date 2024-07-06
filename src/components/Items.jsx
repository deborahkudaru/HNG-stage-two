import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Items = (props) => {
  return (
    <>
      <div className="card-container">
      <div className="card">
          <div className="img-container">
            {/* <div className="cart-logo">
            <IoCartOutline />
          </div> */}
            <img src={props.itemImage} alt="" />
          </div>
          <p className="item-name font-sans">{props.itemName}</p>
          <p className="item-price">{props.price}</p>

          <div className="rate-icon-div">{props.rating}</div>
        </div>
      </div>
    </>
  );
};

export default Items;
