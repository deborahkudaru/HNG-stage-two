import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Items from "../components/Items";
import itemData from "../ItemData";
import newArrival from "../newArrival";
import NewArrivals from "../components/NewArrivals";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Search..." />
      <Category />
      <div className="flex gap-2.5">
        <Items
          itemImage={itemData[0].itemImage}
          itemName={itemData[0].itemName}
          price={itemData[0].price}
          rating={itemData[0].rating}
        />
        <Items
          itemImage={itemData[1].itemImage}
          itemName={itemData[1].itemName}
          price={itemData[1].price}
          rating={itemData[1].rating}
        />
        <Items
          itemImage={itemData[2].itemImage}
          itemName={itemData[2].itemName}
          price={itemData[2].price}
          rating={itemData[2].rating}
        />
        <Items
          itemImage={itemData[3].itemImage}
          itemName={itemData[3].itemName}
          price={itemData[3].price}
          rating={itemData[3].rating}
        />
      </div>

      <div className="flex gap-2.5 relative top-20">
        <Items
          itemImage={itemData[4].itemImage}
          itemName={itemData[4].itemName}
          price={itemData[4].price}
          rating={itemData[4].rating}
        />
        <Items
          itemImage={itemData[5].itemImage}
          itemName={itemData[5].itemName}
          price={itemData[5].price}
          rating={itemData[5].rating}
        />
        <Items
          itemImage={itemData[6].itemImage}
          itemName={itemData[6].itemName}
          price={itemData[6].price}
          rating={itemData[6].rating}
        />
        <Items
          itemImage={itemData[7].itemImage}
          itemName={itemData[7].itemName}
          price={itemData[7].price}
          rating={itemData[7].rating}
        />
      </div>

      <div className="flex gap-2.5 relative top-40">
        <Items
          itemImage={itemData[8].itemImage}
          itemName={itemData[8].itemName}
          price={itemData[8].price}
          rating={itemData[8].rating}
        />
        <Items
          itemImage={itemData[9].itemImage}
          itemName={itemData[9].itemName}
          price={itemData[9].price}
          rating={itemData[9].rating}
        />
        <Items
          itemImage={itemData[10].itemImage}
          itemName={itemData[10].itemName}
          price={itemData[10].price}
          rating={itemData[10].rating}
        />
        <Items
          itemImage={itemData[11].itemImage}
          itemName={itemData[11].itemName}
          price={itemData[11].price}
          rating={itemData[11].rating}
        />
      </div>

      <div className="next">
        <button>
          <GrPrevious />
        </button>
        <p className="one">1</p>
        <p>of</p>
        <p className="twenty">20</p>
        <button>
          <GrNext />
        </button>
      </div>
      <div className="arrival-heading bg-customBlue">
        <h4 className="arrival font-sans2">New Arrival</h4>
      </div>

      <div className="flex gap-2.5 relative top-20 pl-5">
        <NewArrivals
          itemImage={newArrival[0].itemImage}
          itemName={newArrival[0].itemName}
          price={newArrival[0].price}
          rating={newArrival[0].rating}
        />

        <NewArrivals
          itemImage={newArrival[1].itemImage}
          itemName={newArrival[1].itemName}
          price={newArrival[1].price}
          rating={newArrival[1].rating}
        />

        <NewArrivals
          itemImage={newArrival[2].itemImage}
          itemName={newArrival[2].itemName}
          price={newArrival[2].price}
          rating={newArrival[2].rating}
        />

        <NewArrivals
          itemImage={newArrival[3].itemImage}
          itemName={newArrival[3].itemName}
          price={newArrival[3].price}
          rating={newArrival[3].rating}
        />

        <NewArrivals
          itemImage={newArrival[4].itemImage}
          itemName={newArrival[4].itemName}
          price={newArrival[4].price}
          rating={newArrival[4].rating}
        />
      </div>

      
      <div className="flex gap-2.5 relative top-40 pl-5">
        <NewArrivals
          itemImage={newArrival[5].itemImage}
          itemName={newArrival[5].itemName}
          price={newArrival[5].price}
          rating={newArrival[5].rating}
        />

        <NewArrivals
          itemImage={newArrival[6].itemImage}
          itemName={newArrival[6].itemName}
          price={newArrival[6].price}
          rating={newArrival[6].rating}
        />

        <NewArrivals
          itemImage={newArrival[7].itemImage}
          itemName={newArrival[7].itemName}
          price={newArrival[7].price}
          rating={newArrival[7].rating}
        />

        <NewArrivals
          itemImage={newArrival[8].itemImage}
          itemName={newArrival[8].itemName}
          price={newArrival[8].price}
          rating={newArrival[8].rating}
        />

        <NewArrivals
          itemImage={newArrival[9].itemImage}
          itemName={newArrival[9].itemName}
          price={newArrival[9].price}
          rating={newArrival[9].rating}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
