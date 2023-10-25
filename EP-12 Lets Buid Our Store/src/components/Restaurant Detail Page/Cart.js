import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // {
    //   name: 'Chicken Whopper.',
    //   image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/595b9676902e5e37c7990e80c020188e',
    //   qty: 2,
    //   price: 10,
    // },
    // {
    //   name: 'Veg Whopper.',
    //   image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f10379c6bd1edbbb7ee38da07c78058f',
    //   qty: 1,
    //   price: 15,
    // },
  ]);

  const restaurantInfo = {
    name: 'Burger King',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf',
  };
  const gstPrice = 10;
  const deliveryCharge = 5;

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const grandTotal = calculateGrandTotal();

  const handleQuantityChange = (index, newQty) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].qty = newQty;
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page">
      <div className="left-block">
        {cartItems.length === 0 ? (
          <div className="_10-lm">
            <div className="_3a391"></div>
            <div className="_3Y9ZP">Your cart is empty</div>
            <div className="d7jCU">You can go to the home page to view more restaurants</div>
            <div className="_3pgCg"> <Link to="/">See restaurants near you</Link></div>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-details">
                  
                  <div className="item-info">
                  <img src={item.image} alt={item.name} className="item-image" />
                    <p className="item-name">{item.name}</p>
                    <div className="item-quantity">
                      <button onClick={() => handleQuantityChange(index, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleQuantityChange(index, item.qty + 1)}>+</button>
                    </div>
                    <p className="item-price">Price: ${item.price}</p>
                    <p className="item-total">Total: ${item.price * item.qty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="right-block">
        <div className="restaurant-info">
          <img src={restaurantInfo.image} alt={restaurantInfo.name} className="restaurant-image" />
          <p className="restaurant-name">{restaurantInfo.name}</p>
        </div>
        <div className="order-summary">
          <p className="total-price">Total Price: ${grandTotal}</p>
          <p className="gst-price">GST: ${gstPrice}</p>
          <p className="delivery-charge">Delivery Charge: ${deliveryCharge}</p>
          <p className="grand-total">Grand Total: ${grandTotal + gstPrice + deliveryCharge}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
