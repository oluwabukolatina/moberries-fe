import React from 'react';
import CheckoutButtons from '../CheckoutButtons';

export default function CreditCard() {
  return (
    <div className="user-detail">
      <h3>Credit Card</h3>
      <form className="order-pizza-form">
        <div className="select-container">
          <p>Card Number</p>
          <input />
        </div>

        <div className="select-container">
          <p>Card Expiration Date</p>
          <input />
        </div>

        <div className="select-container">
          <p>Card Security Code</p>
          <input />
        </div>
      </form>

      <CheckoutButtons next="confirmation" previous="userDetail" previousName="Previous" nextName="Next" />
    </div>
  );
}
