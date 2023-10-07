import React from "react";
import ReactDOM from "react-dom/client";
import data from "./resData.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg"
          alt="FoodVillage"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props; // destructuring props
  const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    costForTwo,
    avgRating,
    totalRatingsString,
    sla,
  } = resData?.info;

  return (
    <div className="card">
      <img
        className="cardImg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Restaurant Image"
      />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <h5>
          {areaName} (Delivery in : {sla.slaString})
        </h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{costForTwo}</h5>
        <h5>
          <span className="rating">{avgRating}</span> ({totalRatingsString})
        </h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="Search">
              <input type="text" placeholder="Search" />
            </div>
            <div className="res-container">
              <div className="res-header">Restaurant List</div>
              <div className="res-body">
                {data.resData.map((restaurant) => (
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
              </div>
              <div className="res-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
