import React from 'react';
import CheckoutButtons from '../CheckoutButtons';

export default function Confirmation() {
  return (
    <div className="user-detail">
      <h3>Order Summary</h3>
      <div className="orders-summary">
        <p>Your Orders</p>
        <div className="order">
          1<p>name</p>
          <p>$90</p>
        </div>
        <input type="checkbox" id="" name="" value="" />
        <label> I agree to terms & conditions</label>
        <div className="confirm-details">
          <p>Checkout(40)</p>
          <span>$12</span>
        </div>

        <div className="confirm-order">
          <p>Confirm Order</p>
        </div>
      </div>
      <CheckoutButtons next="" previous="creditCard" previousName="Previous" nextName="" />
    </div>
  );
}
