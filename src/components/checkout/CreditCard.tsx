import React, { useContext } from 'react';
import CheckoutButtons from '../layouts/CheckoutButtons';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';
import CustomInput from '../layouts/CustomInput';

export default function CreditCard() {
  const { onOrderChange, checkedOutOrder } = useContext(AppContext) as ContextType;
  const { cardNumber, cardExpiration, cardSecurityCode } = checkedOutOrder;

  return (
    <div className="user-detail">
      <h3>Credit Card</h3>
      <form className="order-pizza-form">
        <div className="select-container">
          <p>Card Number</p>

          <CustomInput onchange={onOrderChange} name="cardNumber" value={cardNumber} />
        </div>

        <div className="select-container">
          <p>Card Expiration Date</p>
          <CustomInput onchange={onOrderChange} name="cardExpiration" value={cardExpiration} />
        </div>

        <div className="select-container">
          <p>Card Security Code</p>

          <CustomInput onchange={onOrderChange} name="cardSecurityCode" value={cardSecurityCode} />
        </div>
      </form>

      <CheckoutButtons next="confirmation" previous="userDetail" previousName="Previous" nextName="Next" />
    </div>
  );
}
