import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RESTRA_CDN_URL } from "../../utils/constants";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  let  cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems);



  function groupAndCountById(items) {
    const groupedItems = {};
  
    items.forEach((item) => {
      const id = item.id;
      if (groupedItems[id]) {
        groupedItems[id].count++;
      } else {
        groupedItems[id] = { ...item, count: 1 };
      }
    });
  
    // Convert the grouped object back to an array
    const result = Object.values(groupedItems);
  
    return result;
  }

 cartItems = groupAndCountById(cartItems);
// console.log(groupedData)



  const gstPrice = 10;
  const deliveryCharge = 5;

  const calculateGrandTotal = () => {
    return cartItems.reduce((total, item) => total + item.price/100 * item.count, 0);
  };

  const grandTotal = calculateGrandTotal();

  // const handleQuantityChange = (index, newQty) => {
  //   const updatedCartItems = [...cartItems];
  //   updatedCartItems[index].qty = newQty;
  //   setCartItems(updatedCartItems);
  // };

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <div className="_10-lm">
      <div className="_3a391"></div>
      <div className="_3Y9ZP">Your cart is empty</div>
      <div className="d7jCU">
        You can go to the home page to view more restaurants
      </div>
      <div className="_3pgCg">
        <Link to="/">See restaurants near you</Link>
      </div>
    </div>
  ) : (
    <div className="cart-page">
      <div className="left-block">
        <button className="btn btn-primary" onClick={handleClearCart}>
          Clear Cart
        </button>
        {/* <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <div className="item-info">
                  <img
                    src={`${RESTRA_CDN_URL}${item.imageId}`}
                    alt={item.name}
                    className="item-image"
                  />
                  
                  <p className="item-name">{item.name}</p>
                  <p className="item-name">Qty : {item.count}</p>

                  <p className="item-price">
                    Price: ₹
                    {item.price / 100 ||
                      item.finalPrice / 100 ||
                      item.defaultPrice / 100}
                  </p>
                  <p className="item-total">
                    Total: ₹
                    {(item.price / 100 ||
                      item.finalPrice / 100 ||
                      item.defaultPrice / 100)*item.count}
                  </p>
                </div>
              </div>
            </div>
          ))}

          
        </div> */}

       <table className="cart-items">
  <thead>
    <tr>
    <th>Image</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price (₹)</th>
      <th>Total (₹)</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item, index) => (
      <tr key={index} className="cart-item">
        <td>
          <img
            src={`${RESTRA_CDN_URL}${item.imageId}`}
            alt={item.name}
            className="item-image"
          />
          
        </td>
        <td>{item.name}</td>
        <td>{item.count}</td>
        <td>₹{(item.price / 100 || item.finalPrice / 100 || item.defaultPrice / 100)}</td>
        <td>₹{(item.price / 100 || item.finalPrice / 100 || item.defaultPrice / 100) * item.count}</td>
      </tr>
    ))}
  </tbody>
</table>

        <div className="order-summary">
          <p className="total-price"><span>Total Price:</span> <span>₹{grandTotal}</span></p>
          <p className="gst-price"><span>GST:</span> <span>₹{gstPrice}</span></p>
          <p className="delivery-charge"><span>Delivery Charge:</span> <span>₹{deliveryCharge}</span></p>
          <p className="grand-total"><span>Grand Total:</span> <span>₹{grandTotal + gstPrice + deliveryCharge}</span></p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
