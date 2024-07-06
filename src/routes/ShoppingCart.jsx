import React from "react";
import Navbar from "../components/Navbar";
import "../styles/cart.css"

const ShoppingCart = () => {
  return (
    <div>
      <Navbar />
      <h2 className="cart-heading font-sans">Shopping Cart</h2>
      <div className="flex">
      <p className="product">Product Detail</p>
      <p className="quantity">Quantity</p>
      <p className="prices">Price</p>
      <p className="total">Total</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
