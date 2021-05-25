import React from 'react';
import CheckoutButtons from '../CheckoutButtons';

export default function UserDetail() {
  return (
    <div className="user-detail">
      <h3>First slide label</h3>
      <form className="order-pizza-form">
        <div className="select-container">
          <p>Type</p>
          <input />
        </div>

        <div className="select-container">
          <p>Type</p>
          <input />
        </div>

        <div className="select-container">
          <p>Type</p>
          <input />
        </div>

        <div className="select-container">
          <p>Type</p>
          <input />
        </div>
      </form>

      <CheckoutButtons next="creditCard" previous="userDetail" previousName="Previous" nextName="Next" />
    </div>
  );
}
