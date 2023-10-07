import RestaurantCard from "./RestaurantCard";
import data from "../utils/resData";

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
                {data.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.info.id}
                    resData={restaurant}
                  />
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

export default Body;