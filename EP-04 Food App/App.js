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

let resObj = {
  info: {
    id: "217031",
    name: "Domino's Pizza",
    cloudinaryImageId: "el6s8c8kmhrummfvsoty",
    locality: "Station Road",
    areaName: "Kalyani",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.5,
    feeDetails: {
      restaurantId: "217031",
      fees: [
        {
          name: "BASE_TIME",
        },
        {
          name: "BASE_DISTANCE",
          fee: 800,
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 800,
    },
    parentId: "2456",
    avgRatingString: "4.5",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 30,
      serviceability: "SERVICEABLE",
      slaString: "30 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-21 00:57:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹999",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {
    context: "seo-data-af62ab1d-7893-4d5f-bfdf-a954391f52e1",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/dominos-pizza-station-road-kalyani-kanchrapara-217031",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
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
          {avgRating} ({totalRatingsString})
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
                  <RestaurantCard resData={restaurant} />
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
