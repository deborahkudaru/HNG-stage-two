import React from "react";

const NewArrivals = (props) => {
  return (
    <div>
      <div className="">
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
  );
};

export default NewArrivals;
