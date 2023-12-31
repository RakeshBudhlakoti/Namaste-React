import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  if (!resData) {
    return null; // Handle the case where resData is not available
  }

  const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    costForTwo,
    avgRating,
    totalRatingsString,
    sla,
  } = resData.info;

  const truncatedCuisines = cuisines.join(', ').substring(0, 20) + '...';

  return (
    <div className="card">
      <img className="cardImg" src={`${CDN_URL}${cloudinaryImageId}`} alt="Restaurant Image" />
      <div className="container1">
        <h4>
          <b>{name}</b>
        </h4>
        <h5>
          {`${areaName} (${sla.slaString})`}
        </h5>
        <h5>{truncatedCuisines}</h5>
        <h5>{costForTwo}</h5>
        <h5>
          <span className="rating">{avgRating}</span> ({totalRatingsString})
        </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
